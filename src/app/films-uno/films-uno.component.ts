import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { VehicleService } from '../services/vehicle.service';
import { Films, Film } from '../models/film'
import { Vehicle } from '../models/vehicle'
import { Search } from '../models/search';

@Component({
  selector: 'app-films-uno',
  templateUrl: './films-uno.component.html',
  styleUrls: ['./films-uno.component.css']
})
export class FilmsUnoComponent implements OnInit {

  title = 'appStarWars';
  films: Films;
  film: Film;
  vehicle: Vehicle;
  search: Search;
  newhope: Boolean = true;
  attack: Boolean = true;
  phantom: Boolean = true;
  revenge: Boolean = true;
  jedi: Boolean = true;
  empire: Boolean = true;
  force: Boolean = true;
  vehicles: Vehicle[] = [];
  

  constructor(private filmService: FilmService, private vehicleService: VehicleService) {

  }

  ngOnInit() {
    this.getFilm();
  }

  getFilms() {
    this.filmService.getFilms().subscribe((filmsFromAPI: Films) => {
      this.films = filmsFromAPI;
    }, (err: any) => {
      console.error(err);
    });
  }

  getFilm() {
    this.filmService.getFilm('1').subscribe((filmFromAPI: Film) => {
      this.film = filmFromAPI;
      this.getVehicles();
    }, (err: any) => {
      console.error(err);
    });
  }

  getVehicles() {
    var self = this;
    this.film.vehicles.forEach(function (vehicle) {
      self.getVehicle(vehicle);
    });
  }

  getVehicle(url: string) {
    this.vehicleService.getVehicle(url).subscribe((vehicleFromAPI: Vehicle) => {
      this.vehicles.push(vehicleFromAPI);
    }, (err: any) => {
      console.error(err);
    });
  }


}
