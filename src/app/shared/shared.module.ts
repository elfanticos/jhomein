import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
