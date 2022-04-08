import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyComponent } from './components/empty/empty.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    EmptyComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmptyComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
