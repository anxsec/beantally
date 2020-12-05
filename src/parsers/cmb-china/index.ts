import { simpleParser } from 'mailparser';
import cheerio from 'cheerio';

import { Parser, TransDetail, RecordDetail } from '../../types';
import { TRANS_RECORDS, TRANS_RECORDS_DETAIL } from './constants';

export class CMBChinaParser implements Parser {
  async parse(content: Buffer): Promise<TransDetail | null> {
    try {
      const { html } = await simpleParser(content);
      if (!html) return null;
      const $ = cheerio.load(html);
      const records = $(TRANS_RECORDS);
      const transRecords: RecordDetail[] = [];
      records.each((x, record) => {
        const transRecord: string[] = [];
        if (x === 0 || x === records.length - 1) return;
        const recordItems = $(record).find(TRANS_RECORDS_DETAIL);
        if(recordItems.length < 8) return;
        recordItems.each((y, item) => {
          if (y === 0) return;
          transRecord.push($(item).text().trim());
        });
        transRecords.push((transRecord as unknown) as RecordDetail);
      });
      console.log(transRecords);
    } catch (err) {
      // console.log(err);
    }
    return {
      beginDate: new Date(),
      endDate: new Date(),
      records: [],
    };
  }
}
