import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [FilmService]
})
export class FilmsComponent implements OnInit {

  public title: string;
  public films: Array<Film>;
  public favorite?: Film;
  public date: any;

  constructor(
    private _filmService: FilmService
  ) {
    this.title = "Peliculas";
    this.films = this._filmService.getFilms();
    this.date = new Date(2020, 8, 12);
   }

  ngOnInit(): void {
    console.log(this.films);
    console.log(this._filmService.helloWorld());
  }

  viewFavorite(event: any){
    console.log(event.film);
   this.favorite = event.film;
  }
}
