import { staticPage } from '@/lib/page-factory';

const p = staticPage('/who-we-help/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
