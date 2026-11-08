import { staticPage } from '@/lib/page-factory';

const p = staticPage('/markets/');
export const generateMetadata = p.generateMetadata;
export default p.Page;
