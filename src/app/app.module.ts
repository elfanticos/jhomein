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
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { NewsComponent } from './components/news/news.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './views/about/about.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { CoursesComponent } from './views/courses/courses.component';


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
    AdvertisementsComponent,
    NewsComponent,
    SearchComponent,
    HomeComponent,
    AboutComponent,
    ArticlesComponent,
    CoursesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
