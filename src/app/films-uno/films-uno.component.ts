import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { VehicleService } from '../services/vehicle.service';
import { Films, Film } from '../models/film'
import { Vehicle } from '../models/vehicle'
import { Search } from '../models/search';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character';
import { Planet } from '../models/planet';
import { PlanetService } from '../services/planet.service';
import { StarshipService } from '../services/starship.service';
import { Starship } from '../models/starship';
import { Specie } from '../models/specie';
import { SpecieService } from '../services/specie.service';


@Component({
  selector: 'app-films-uno',
  templateUrl: './films-uno.component.html',
  styleUrls: ['./films-uno.component.css']
})
export class FilmsUnoComponent implements OnInit {
  [x: string]: any;

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
  characters: Character[] = [];
  planets: Planet[] = [];
  starships: Starship[] = [];
  species: Specie[] = [];
  
 
  
  

  constructor(private filmService: FilmService, private vehicleService: VehicleService, private characterService: CharacterService, private planetService: PlanetService, private starshipService: StarshipService,
    private specieService: SpecieService) {

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
    this.filmService.getFilm('2').subscribe((filmFromAPI: Film) => {
      this.film = filmFromAPI;
      this.getVehicles();
      this.getCharacters();
      this.getPlanets();
      this.getStarships();
      this.getSpecies();
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

  getCharacters() {
    var self = this;
    this.film.characters.forEach(function (character) {
      self.getCharacter(character);
    });
  }

  getCharacter(url: string) {
    this.characterService.getCharacter(url).subscribe((characterFromAPI: Character) => {
      this.characters.push(characterFromAPI);
    }, (err: any) => {
      console.error(err);
    });
  }

  getPlanets() {
    var self = this;
    this.film.planets.forEach(function (planet) {
      self.getPlanet(planet);
    });
  }

  getPlanet(url: string) {
    this.planetService.getPlanet(url).subscribe((planetFromAPI: Planet) => {
      this.planets.push(planetFromAPI);
    }, (err: any) => {
      console.error(err);
    });
  }

  getStarships() {
    var self = this;
    this.film.starships.forEach(function (starship) {
      self.getStarship(starship);
    });
  }

  getStarship(url: string) {
    this.starshipService.getStarship(url).subscribe((starshipFromAPI: Starship) => {
      this.starships.push(starshipFromAPI);
    }, (err: any) => {
      console.error(err);
    });
  }

  getSpecies() {
    var self = this;
    this.film.species.forEach(function (specie) {
      self.getSpecie(specie);
    });
  }

  getSpecie(url: string) {
    this.specieService.getSpecie(url).subscribe((specieFromAPI: Specie) => {
      this.species.push(specieFromAPI);
    }, (err: any) => {
      console.error(err);
    });
  }

}
