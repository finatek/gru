import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import {
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { SharedModule } from '../shared/shared.module';

import { AppLayoutComponent } from './components/app-layout/app-layout.component';

import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NbThemeModule.forRoot({ name: 'light' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    SharedModule
  ]
})
export class CoreModule { }
