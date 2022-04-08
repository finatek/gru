import { IQuantity } from './quantity.model';


export interface IPurchasePreferences {

  storeId: string;
  quantity: IQuantity;
  unitaryPrice: number;

}
