import { NgModule } from '@angular/core';
import { routingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { FilmsComponent } from './components/films/films.component';
import { FormComponent } from './components/form/form.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { FilmComponent } from './components/film/film.component';
import { EsParPipe } from './pipes/espar.piper';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    SliderComponent,
    SidebarComponent,
    HomeComponent,
    PageComponent,
    FilmsComponent,
    FormComponent,
    ErrorComponent,
    FooterComponent,
    FilmComponent,
    EsParPipe
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
