import { Component, OnInit } from '@angular/core';

import { NbMenuItem, NbSidebarService } from '@nebular/theme';


const SIDEBAR_TAG: string = 'sidebar-tag';

const SIDEBAR_MENU_ITEMS: Array<NbMenuItem> = [
  {
    title: 'Menu item 1',
    link: '#'
  },
  {
    title: 'Menu item 2',
    link: '#'
  },
  {
    title: 'Menu item 3',
    link: '#'
  }
];


@Component({
  templateUrl: './app-layout.component.html',
  styleUrls: [ './app-layout.component.scss' ]
})
export class AppLayoutComponent implements OnInit {

  sidebarTag: string = SIDEBAR_TAG;

  sidebarMenuItems: Array<NbMenuItem> = SIDEBAR_MENU_ITEMS;

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit() { }

  toggleSidebar() {
    this.sidebarService.toggle(false, this.sidebarTag);
  }

}
