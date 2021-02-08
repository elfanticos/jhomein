import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { SocialAttachBarComponent } from './components/social-attach-bar/social-attach-bar.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent, SocialAttachBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    SocialAttachBarComponent
  ]
})
export class SharedModule { }
