import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film.service';
import { Films } from './models/film';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appStarWars';
  films : Films

  constructor(private filmService: FilmService){

  }

  ngOnInit(){
    this.getFilms();
  }

  getFilms() {
    this.filmService.getFilms().subscribe((filmsFromAPI:Films)=>{
      this.films = filmsFromAPI;
      console.log(this.films);
    }, (err: any)=>{
      console.error(err);
    });
  }

}

