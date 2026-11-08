import { staticPage } from '@/lib/page-factory';

const p = staticPage('/editorial-policy/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
