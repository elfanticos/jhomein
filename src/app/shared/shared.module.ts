import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { SocialAttachBarComponent } from './components/social-attach-bar/social-attach-bar.component';
import { ModalContactComponent } from './components/modal-contact/modal-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent, 
    FooterComponent,
    SocialAttachBarComponent,
    ModalContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    SocialAttachBarComponent,
    ModalContactComponent
  ],
  entryComponents: [
    ModalContactComponent
  ]
})
export class SharedModule { }
