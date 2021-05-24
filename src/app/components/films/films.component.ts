import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public title: string;
  public films: Array<Film>;

  constructor() {
    this.title = "Peliculas";
    this.films = [
      new Film("Regreso al futuro", 1985, "http://www.mexmads.com/wp-content/uploads/2020/07/35-anos-back-to-the-future.jpg"),
      new Film("Karate kid", 1984, "https://images.clarin.com/2020/09/27/karate-kid___ajOz6stdo_720x0__1.jpg"),
      new Film("Los Goonies", 1985, "https://i2.wp.com/padresfrikis.com/wp-content/uploads/2018/10/goonies.jpg?fit=620%2C350&ssl=1"),
      new Film("Dentro del laberinto", 1986, "https://cinergetica.com.mx/wp-content/uploads/2016/01/laberinto-jennifer-connelly-david-bowie.jpg" ),
      new Film("La historia interminable", 1984, "https://cronicaglobal.elespanol.com/uploads/s1/88/50/33/6/ende1.jpeg")
    ];
   }

  ngOnInit(): void {
    console.log(this.films);
  }
}
