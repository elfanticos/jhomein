import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { MaterialModule } from '../material';

import { throwIfAlreadyLoaded } from './guards/modele-import-guard';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

