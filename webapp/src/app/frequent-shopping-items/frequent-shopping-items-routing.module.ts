import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrequentShoppingItemsComponent } from './frequent-shopping-items.component';
import { FrequentShoppingItemsListComponent } from './components/frequent-shopping-items-list/frequent-shopping-items-list.component';


const FREQUENT_SHOPPING_ITEMS_ROUTES: Routes = [
  {
    path: '',
    component: FrequentShoppingItemsComponent,
    children: [
      {
        path: '',
        component: FrequentShoppingItemsListComponent
      }
    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(FREQUENT_SHOPPING_ITEMS_ROUTES) ],
  exports: [ RouterModule ]
})
export class FrequentShoppingItemsRoutingModule { }
