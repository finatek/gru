import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule } from '@nebular/theme';

import { SharedModule } from '../shared/shared.module';
import { FrequentShoppingItemsRoutingModule } from './frequent-shopping-items-routing.module';

import { FrequentShoppingItemsComponent } from './frequent-shopping-items.component';
import { FrequentShoppingItemsListComponent } from './components/frequent-shopping-items-list/frequent-shopping-items-list.component';


@NgModule({
  declarations: [
    FrequentShoppingItemsComponent,
    FrequentShoppingItemsListComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    SharedModule,
    FrequentShoppingItemsRoutingModule
  ]
})
export class FrequentShoppingItemsModule { }
