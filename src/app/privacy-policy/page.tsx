import { staticPage } from '@/lib/page-factory';

const p = staticPage('/privacy-policy/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
