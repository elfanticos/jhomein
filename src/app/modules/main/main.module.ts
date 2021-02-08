import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './views/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [MainComponent, PresentationComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MainModule { }
