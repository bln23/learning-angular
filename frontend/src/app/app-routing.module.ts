import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { FilmsComponent } from './components/films/films.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'form', component: FormComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'page', component: PageComponent },
  { path: 'page/:name/:lastname', component: PageComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
