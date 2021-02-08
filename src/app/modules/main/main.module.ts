import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './views/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MaterialModule } from '../material/material.module';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ProjectsComponent } from './components/proyects/projects.component';


@NgModule({
  declarations: [MainComponent,
    PresentationComponent,
    AboutComponent,
    ServicesComponent,
    ContactMeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MainModule { }
