import localFont from 'next/font/local';

// Self-hosted from @fontsource packages: no third-party font requests at runtime.
export const inter = localFont({
  src: [{ path: '../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const serif = localFont({
  src: [{ path: '../../node_modules/@fontsource-variable/source-serif-4/files/source-serif-4-latin-wght-normal.woff2', weight: '200 900', style: 'normal' }],
  variable: '--font-serif4',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});
