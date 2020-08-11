import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatSidenavModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { WorksComponent } from './components/works/works.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    // Angular Materials
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ContactMeComponent,
    WorksComponent,
    BriefcaseComponent,
    AboutMeComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
