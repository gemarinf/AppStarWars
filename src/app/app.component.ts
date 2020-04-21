import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film.service';
import { Films } from './models/film';
import { Search } from './models/search';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appStarWars';
  films : Films
  search: Search
  newhope: Boolean = true;
    attack: Boolean = true;
    phantom: Boolean = true;
    revenge: Boolean = true;
    jedi: Boolean = true;
    empire: Boolean = true;
    force: Boolean = true;

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

  searchByYear(year:string)
  {
   console.log(year);

     if(year.includes("1977") || year.includes("a new hope"))
    {
      this.newhope = true;
      this.attack = false;
      this.phantom = false;
      this.revenge = false;
      this.jedi = false;
      this.empire = false;
      this.force = false;
    }
    else if(year.includes("2002") || year.includes("attack of the clones"))
    {
      this.newhope = false;
      this.attack = true;
      this.phantom = false;
      this.revenge = false;
      this.jedi = false;
      this.empire = false;
      this.force = false;
    }
    else if(year.includes("1999") || year.includes("the phantom menace"))
    {
      this.newhope = false;
      this.attack = false;
      this.phantom = true;
      this.revenge = false;
      this.jedi = false;
      this.empire = false;
      this.force = false;
    }
    else if(year.includes("2005") || year.includes("revenge of the sith"))
    {
      this.newhope = false;
      this.attack = false;
      this.phantom = false;
      this.revenge = true ;
      this.jedi = false;
      this.empire = false;
      this.force = false;
    }
    else if(year.includes("1983") || year.includes("return of the jedi"))
    {
      this.newhope = false;
      this.attack = false;
      this.phantom = false;
      this.revenge = false ;
      this.jedi = true;
      this.empire = false;
      this.force = false;
    }
    else if(year.includes("1980") || year.includes("the empire strikes back"))
    {
      this.newhope = false;
      this.attack = false;
      this.phantom = false;
      this.revenge = false ;
      this.jedi = false;
      this.empire = true;
      this.force = false;
    }
    else if(year.includes("2015") || year.includes("the force awakens"))
    {
      this.newhope = false;
      this.attack = false;
      this.phantom = false;
      this.revenge = false ;
      this.jedi = false;
      this.empire = false;
      this.force = true;
    }
    else
      {
        console.log("entra else");
        this.newhope = true;
        this.attack = true;
        this.phantom = true;
        this.revenge = true ;
        this.jedi = true;
        this.empire = true;
        this.force = true;
      }
  }

  keyPress(event: any) {
    const inputChar = String.fromCharCode((event as KeyboardEvent).charCode);
    console.log(inputChar);
    this.searchByYear(inputChar);
}

}

