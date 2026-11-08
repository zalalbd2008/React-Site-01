import { staticPage } from '@/lib/page-factory';

const p = staticPage('/our-process/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
