/** Primary navigation. Labels match the agreed IA: Services | Who We Help | Markets | Results | Resources | About | Request an Audit */
export const primaryNav = [
  { label: 'Services', href: '/services/' },
  { label: 'Who We Help', href: '/who-we-help/' },
  { label: 'Markets', href: '/markets/' },
  { label: 'Results', href: '/case-studies/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'About', href: '/about/' },
] as const;

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; children: NavLink[] };
