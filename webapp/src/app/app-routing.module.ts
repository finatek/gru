import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';


const APP_ROUTES: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
