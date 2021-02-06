import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddHeaderInterceptor } from './core/interceptors/add-header.interceptor';
import { CacheInterceptor } from './core/interceptors/cache.interceptor';

import { CoreModule } from './core/core.module';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { WorksComponent } from './components/works/works.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselHolderComponent } from './components/carousel-holder/carousel-holder.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillComponent } from './components/skill/skill.component';
import { MenuComponent } from './components/menu/menu.component';



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
    MaterialModule,
    // Dependences
    CarouselModule,
    NgbModule
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
    CarouselHolderComponent,
    SkillListComponent,
    SkillComponent,
    MenuComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
