import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArticleLastComponent } from './views/article-last/article-last.component';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';
import { CoursesComponent } from './views/courses/courses.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { AboutComponent } from './views/about/about.component';
@NgModule({
  declarations: [HomeComponent, ArticleLastComponent, CoursesComponent, ArticlesComponent, AboutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class HomeModule { }
