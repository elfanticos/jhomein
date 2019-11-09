import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ArticleLastComponent } from './views/article-last/article-last.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { CoursesComponent } from './views/courses/courses.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ArticleLastComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
