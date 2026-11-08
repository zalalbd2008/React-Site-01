import { staticPage } from '@/lib/page-factory';

const p = staticPage('/about/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
