import fs from 'fs/promises';

import { ImportType, Parser } from './types';
import { CMBChinaParser } from './parsers';

export class Importer {
  private type: ImportType;
  private parser: Parser;
  constructor(type: ImportType) {
    this.type = type;
    // if (type === ImportType.CMBChina)
    this.parser = new CMBChinaParser();
  }

  async import(filePath: string) {
    try {
      const fileStream = await fs.readFile(filePath);
      const transDetail = this.parser.parse(fileStream);
      console.log(transDetail);
    } catch (err) {
      // console.log(err);
    }
  }
}
