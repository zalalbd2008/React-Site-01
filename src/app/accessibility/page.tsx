import { staticPage } from '@/lib/page-factory';

const p = staticPage('/accessibility/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
