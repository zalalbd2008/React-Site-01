import { staticPage } from '@/lib/page-factory';

const p = staticPage('/blog/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
