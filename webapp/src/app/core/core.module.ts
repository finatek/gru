import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppLayoutComponent } from './components/app-layout/app-layout.component';


@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [
    RouterModule,
    NbThemeModule.forRoot({ name: 'light' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule
  ],
  exports: []
})
export class CoreModule { }
