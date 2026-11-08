const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true, focusable: false };

export const IconHome = () => (<svg {...base}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>);
export const IconGrid = () => (<svg {...base}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>);
export const IconAudit = () => (<svg {...base}><path d="M9 4h6l1 2h3v15H5V6h3z" /><path d="m9 13 2 2 4-4" /></svg>);
export const IconChat = () => (<svg {...base}><path d="M4 5h16v11H9l-5 4z" /></svg>);
export const IconMenu = () => (<svg {...base}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const IconClose = () => (<svg {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>);
