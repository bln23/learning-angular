import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() film!: Film;
  @Output() CheckFavorite = new EventEmitter();

  ngOnInit(): void {
  }

  select(){
    this.CheckFavorite.emit({
      film: this.film
    });
  }
}
