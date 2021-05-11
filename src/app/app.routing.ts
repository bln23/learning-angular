//importar los modulos del router angular
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes a los cuales les quiero hacer una pagina excusiva
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FilmsComponent } from './components/films/films.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogComponent } from './components/blog/blog.component';

//array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'form', component: FormComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'page', component: PageComponent },
    { path: 'page/:name/:lastname', component: PageComponent },
    { path: '**', component: ErrorComponent }
];

//exportar el modulo de rutas
export const routingModule: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);