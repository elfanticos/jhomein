import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
} from '@angular/material';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { WorksComponent } from './components/works/works.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselHolderComponent } from './components/carousel-holder/carousel-holder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillComponent } from './components/skill/skill.component';


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
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
