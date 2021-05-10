import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public title: string;
  public films: Array<any>;

  constructor() {
    this.title = "Peliculas";
    this.films = [
      { year: 1985,title: "Regreso al futuro", image: "http://www.mexmads.com/wp-content/uploads/2020/07/35-anos-back-to-the-future.jpg" },
      { year: 1984,title: "Karate Kid", image: "https://images.clarin.com/2020/09/27/karate-kid___ajOz6stdo_720x0__1.jpg" },
      { year: 1985,title: "Los Goonies", image: "https://i2.wp.com/padresfrikis.com/wp-content/uploads/2018/10/goonies.jpg?fit=620%2C350&ssl=1" },
      { year: 1986,title: "Dentro del laberinto", image: "https://cinergetica.com.mx/wp-content/uploads/2016/01/laberinto-jennifer-connelly-david-bowie.jpg" },
      { year: 1984,title: "La historia interminable", image: "https://cronicaglobal.elespanol.com/uploads/s1/88/50/33/6/ende1.jpeg" }
    ];
   }

  ngOnInit(): void {
    console.log(this.films);
  }
}
