import { staticPage } from '@/lib/page-factory';

const p = staticPage('/case-studies/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
