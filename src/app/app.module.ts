
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmsCeroComponent } from './films-cero/films-cero.component';

import { RoutingModule } from './routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FilmsUnoComponent } from './films-uno/films-uno.component';
import { FilmsDosComponent } from './films-dos/films-dos.component';
import { FilmsTresComponent } from './films-tres/films-tres.component';
import { FilmsCuatroComponent } from './films-cuatro/films-cuatro.component';
import { FilmsCincoComponent } from './films-cinco/films-cinco.component';
import { FilmsSeisComponent } from './films-seis/films-seis.component';
import { FilmsSieteComponent } from './films-siete/films-siete.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsCeroComponent,
    HomeComponent,
    FilmsUnoComponent,
    FilmsDosComponent,
    FilmsTresComponent,
    FilmsCuatroComponent,
    FilmsCincoComponent,
    FilmsSeisComponent,
    FilmsSieteComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
