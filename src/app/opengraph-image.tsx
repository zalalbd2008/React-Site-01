import { ImageResponse } from 'next/og';

export const alt = 'Alpha Dental Media — dental marketing for practices and dental groups';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Typographic share image used until licensed brand imagery is supplied. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0b1f3a', padding: '72px 80px', color: '#ffffff', fontFamily: 'serif' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span style={{ fontSize: 64, fontWeight: 700 }}>Alpha</span>
          <span style={{ fontSize: 34, letterSpacing: 6, color: '#7fd1c7', fontFamily: 'sans-serif' }}>DENTAL MEDIA</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ fontSize: 58, lineHeight: 1.15, maxWidth: 960 }}>Dental marketing built around booked, attended visits.</span>
          <span style={{ fontSize: 28, color: '#c9d4e4', fontFamily: 'sans-serif' }}>Houston-based · Serving dental practices and groups nationwide</span>
        </div>
      </div>
    ),
    size,
  );
}
