
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { FilmsCeroComponent } from '../films-cero/films-cero.component';
import { FilmsUnoComponent } from '../films-uno/films-uno.component';
import { FilmsDosComponent } from '../films-dos/films-dos.component';
import { FilmsTresComponent } from '../films-tres/films-tres.component';
import { FilmsCuatroComponent } from '../films-cuatro/films-cuatro.component';
import { FilmsCincoComponent } from '../films-cinco/films-cinco.component';
import { FilmsSeisComponent } from '../films-seis/films-seis.component';
import { FilmsSieteComponent } from '../films-siete/films-siete.component';






const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-new-hope', component: FilmsCeroComponent },
  { path: 'empire-strikers', component: FilmsUnoComponent },
  { path: 'return-of-the-jedi', component: FilmsDosComponent },
  { path: 'the-phantonm-amenace', component: FilmsTresComponent },
  { path: 'attack-of-the-clones', component: FilmsCuatroComponent },
  { path: 'revance-of-the-sith', component: FilmsCincoComponent },
  { path: 'the-force-awakens', component: FilmsSeisComponent },
  { path: '**', component: FilmsSieteComponent }
 

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class RoutingModule { }
