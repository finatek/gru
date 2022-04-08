import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { catchError, map, Observable, throwError } from 'rxjs';

import { IShoppingItem } from '../models/shopping-item.model';


const SHOPPING_ITEMS_COLLECTION_ID: string = 'shopping-items';
const SHOPPING_ITEM_DOCUMENT_ID_FIELD: string = 'id';


@Injectable({
  providedIn: 'root'
})
export class ShoppingItemService {

  constructor(
    private store: AngularFirestore
  ) { }

  getShoppingItems(isFrequent?: boolean): Observable<Array<IShoppingItem>> {

    const shoppingItemsCollection: AngularFirestoreCollection = this.store.collection<IShoppingItem>(
      SHOPPING_ITEMS_COLLECTION_ID,
      query => {
        if (isFrequent !== undefined) {
          query = query.where('isFrequent', '==', isFrequent) as any;
        }
        return query;
      }
    );

    return (shoppingItemsCollection.valueChanges({ idField: SHOPPING_ITEM_DOCUMENT_ID_FIELD }) as any).pipe(
      map((items: Array<IShoppingItem>) => {
        items.sort((item1, item2) => item1.category.localeCompare(item2.category) || item1.name.localeCompare(item2.name));
        return items;
      }),
      catchError(err => throwError(() => new Error(err)))
    );

  }

}
