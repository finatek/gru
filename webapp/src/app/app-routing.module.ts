import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './core/components/app-layout/app-layout.component';


const APP_ROUTES: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {
        path: 'frequent-shopping-items',
        loadChildren: () => import('./frequent-shopping-items/frequent-shopping-items.module').then((m) => m.FrequentShoppingItemsModule)
      },
      {
        path: '**',
        redirectTo: 'frequent-shopping-items',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
