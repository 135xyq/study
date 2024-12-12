import ReadData from './ReadListData';
import { ReadListData, ReadListData1 } from '../model/ReadData';

export class ReadViewModel {
  loadDataSource(): ReadData[] {
    return ReadListData;
  }

  loadDataSource1(): ReadData[] {
    return ReadListData1;
  }
}