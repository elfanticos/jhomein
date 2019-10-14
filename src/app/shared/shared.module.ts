import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';



@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...fromComponents.components,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
