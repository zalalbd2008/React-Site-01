import { staticPage } from '@/lib/page-factory';

const p = staticPage('/dental-marketing-audit/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
