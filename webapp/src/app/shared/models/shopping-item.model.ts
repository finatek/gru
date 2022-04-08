import { IPurchasePreferences } from './purchase-preference.model';

import { ShoppingItemCategoryEnum } from '../enumerations/shopping-item-category.enum';


export interface IShoppingItem {

  id: string;
  name: string;
  description?: string;
  category: ShoppingItemCategoryEnum;
  isFrequent: boolean;
  purchasePreferences?: IPurchasePreferences;

}
