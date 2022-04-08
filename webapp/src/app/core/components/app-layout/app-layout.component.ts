import { Component } from '@angular/core';

import { NbMenuItem, NbSidebarService } from '@nebular/theme';


const SIDEBAR_TAG: string = 'sidebar-tag';

const SIDEBAR_MENU_ITEMS: Array<NbMenuItem> = [
  {
    title: 'Frequent shopping items',
    link: '/app/frequent-shopping-items'
  }
];


@Component({
  templateUrl: './app-layout.component.html',
  styleUrls: [ './app-layout.component.scss' ]
})
export class AppLayoutComponent {

  sidebarTag: string = SIDEBAR_TAG;

  sidebarMenuItems: Array<NbMenuItem> = SIDEBAR_MENU_ITEMS;

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  toggleSidebar(): void {
    this.sidebarService.toggle(false, this.sidebarTag);
  }

}
