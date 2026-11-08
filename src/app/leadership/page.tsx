import { staticPage } from '@/lib/page-factory';

const p = staticPage('/leadership/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
