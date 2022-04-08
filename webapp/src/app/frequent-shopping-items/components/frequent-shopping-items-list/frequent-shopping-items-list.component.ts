import { Component, OnDestroy, OnInit } from '@angular/core';

import { SubSink } from 'subsink';

import { ShoppingItemService } from '../../../shared/services/shopping-item.service';
import { LoaderService } from '../../../shared/components/loader/loader.service';

import { IShoppingItem } from '../../../shared/models/shopping-item.model';


@Component({
  templateUrl: './frequent-shopping-items-list.component.html',
  styleUrls: [ './frequent-shopping-items-list.component.scss' ]
})
export class FrequentShoppingItemsListComponent implements OnInit, OnDestroy {

  items: Array<IShoppingItem> = [];

  noData: boolean = false;

  private subs: SubSink = new SubSink();

  constructor(
    private shoppingItemService: ShoppingItemService,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.getFrequentShoppingItems();
  }

  getFrequentShoppingItems(): void {
    this.loaderService.showLoader();
    this.subs.add(
      this.shoppingItemService.getShoppingItems(true).subscribe(
        (items: Array<IShoppingItem>) => {
          this.items = items;
          this.noData = this.items.length === 0;
          this.loaderService.hideLoader();
        },
        (error: any) => {
          console.error(error);
          this.noData = true;
          this.loaderService.hideLoader();
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
