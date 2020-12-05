import { ImportType } from './src/types';
import { Importer } from './src';

const importer = new Importer(ImportType.CMBChina);

importer.import('../../Financial/eml/202008.eml');
