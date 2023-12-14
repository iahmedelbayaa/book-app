import { Store } from '../model/store-model';
export class queryList {
  GET_STORE_LIST_QUERY: string =
    'SELECT STORE_ID, STORE_NAME, STORE_CODE FROM BMS.STORE';
  SAVE_STORE_QUERY :string = 'INSERT INTO BMS.STORE (STORE_NAME, STORE_CODE, ADDRESS , CREATED_ON , CREATED_By) VALUES($1, $2, $3, $4, $5)'
}