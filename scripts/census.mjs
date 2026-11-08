// Pull a fixed set of ACS 5-year Data Profile values for a Census place (city).
// Variable codes and labels verified against api.census.gov profile variables.json for the 2023 and 2024 vintages.
// Usage: node scripts/census.mjs "Fort Worth" TX [--vintage 2023]
// Output: JSON with geography name, GEOID, table ids, vintage, labels and values, plus source URLs.
// Uses the public data.census.gov table API (no key) and the 2023 Gazetteer for GEOIDs.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const [, , cityArg, stateArg, ...rest] = process.argv;
if (!cityArg || !stateArg) {
  console.error('Usage: node scripts/census.mjs "<City>" <ST> [--vintage 2023]');
  process.exit(1);
}
const vintage = rest.includes('--vintage') ? rest[rest.indexOf('--vintage') + 1] : '2024';
const FIPS = { TX: '48', FL: '12', GA: '13', CA: '06' };
const st = FIPS[stateArg.toUpperCase()];
if (!st) throw new Error('State must be TX, FL, GA or CA');

const cacheDir = path.resolve(import.meta.dirname, '..', 'research', 'local', '.cache');
fs.mkdirSync(cacheDir, { recursive: true });

async function cached(url, file) {
  const p = path.join(cacheDir, file);
  if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  // curl honours the environment's HTTPS proxy settings; Node's fetch does not.
  const t = execFileSync('curl', ['-sS', '--fail', '--max-time', '60', url], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  fs.writeFileSync(p, t);
  return t;
}

const gazUrl = `https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2023_Gazetteer/2023_gaz_place_${st}.txt`;
const gaz = await cached(gazUrl, `gaz_${st}.txt`);
const norm = (s) => s.toLowerCase().replace(/\./g, '').replace(/\bsaint\b/, 'st').trim();
const want = norm(cityArg);
const rows = gaz.split('\n').slice(1).map((l) => l.split('\t').map((x) => x.trim())).filter((r) => r.length > 4);
const candidates = rows.filter((r) => {
  const n = norm(r[3]).replace(/ (city|town|village|cdp|consolidated government \(balance\)|unified government \(balance\)|metropolitan government \(balance\)|city and borough)$/i, '');
  return n === want || norm(r[3]).startsWith(want + ' ') || norm(r[3]).startsWith(want + '-');
});
if (!candidates.length) throw new Error(`No Gazetteer place matches "${cityArg}" in ${stateArg}`);
// Prefer incorporated places (LSAD 25 = city) over CDPs.
candidates.sort((a, b) => (a[4] === '25' ? -1 : 0) - (b[4] === '25' ? -1 : 0));
const [, geoid, , name, lsad, , aland, , alandSqmi] = candidates[0];

const VARS = {
  DP05_0001E: 'Total population',
  DP05_0019PE: 'Percent of population under 18 years',
  DP05_0024PE: 'Percent of population 65 years and over',
  DP05_0018E: 'Median age (years)',
  DP02_0001E: 'Total households',
  DP02_0114PE: 'Percent of population 5+ speaking a language other than English at home',
  DP02_0115PE: 'Percent of population 5+ who speak English less than "very well"',
  DP02_0116PE: 'Percent of population 5+ speaking Spanish at home',
  DP02_0068PE: "Percent of population 25+ with a bachelor's degree or higher",
  DP03_0062E: 'Median household income (inflation-adjusted dollars of the survey year)',
  DP03_0025E: 'Mean travel time to work (minutes)',
  DP03_0099PE: 'Percent of civilian noninstitutionalized population with no health insurance coverage',
  DP03_0074PE: 'Percent of households receiving SNAP/food stamp benefits in past 12 months',
  DP04_0046PE: 'Percent of occupied housing units that are owner-occupied',
};

const out = {
  query: { city: cityArg, state: stateArg },
  geography: name,
  geoid: `160XX00US${geoid}`,
  lsad,
  landAreaSqMi: Number(alandSqmi),
  dataset: `American Community Survey ${Number(vintage) - 4}–${vintage} 5-year estimates, Data Profiles (DP02, DP03, DP04, DP05)`,
  retrieved: new Date().toISOString().slice(0, 10),
  sources: [] ,
  values: {},
};
for (const table of ['DP02', 'DP03', 'DP04', 'DP05']) {
  const url = `https://data.census.gov/api/access/data/table?id=ACSDP5Y${vintage}.${table}&g=160XX00US${geoid}`;
  const t = await cached(url, `${table}_${vintage}_${geoid}.json`);
  const data = JSON.parse(t).response.data;
  const header = data[0];
  const vals = data[1];
  out.sources.push(`https://data.census.gov/table/ACSDP5Y${vintage}.${table}?g=160XX00US${geoid}`);
  for (const [id, label] of Object.entries(VARS)) {
    if (!id.startsWith(table)) continue;
    const i = header.indexOf(id);
    const mi = header.indexOf(id.replace(/E$/, 'M'));
    if (i > -1) out.values[id] = { label, estimate: vals[i], marginOfError: mi > -1 ? vals[mi] : null };
  }
}
console.log(JSON.stringify(out, null, 2));
