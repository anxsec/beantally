export type RecordDetail = [
  prefix: string,
  transDate: string,
  postDate: string,
  description: string,
  rmbAmount: string,
  cardNumber: string,
  area: string,
  originalTransAmount: string
];

// enum TransArea {
//     China = 'CN',
// }

export interface TransRecord {
  transDate: Date;
  postDate: Date;
  description: string;
  rmbAmount: number;
  cardNumber: string;
  // area: TransArea;
  originalTransAmount: number;
}

export type TransRecords = TransRecord[];

export interface TransDetail {
  beginDate: Date;
  endDate: Date;
  records: TransRecords;
};
