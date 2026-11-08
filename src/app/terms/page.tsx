import { staticPage } from '@/lib/page-factory';

const p = staticPage('/terms/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
