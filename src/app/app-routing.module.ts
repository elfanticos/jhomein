import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CoursesComponent } from './views/courses/courses.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
