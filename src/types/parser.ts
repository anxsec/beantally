import { TransDetail } from './';

export interface Parser {
  parse(content: string | Buffer): Promise<TransDetail | null>;
}
