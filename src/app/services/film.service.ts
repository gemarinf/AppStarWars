import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Films } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  baseUrl = environment.apiURL + 'films';
  constructor(private http: HttpClient) { }

  getFilms(): Observable<Films> {
    const url = this.baseUrl;
    return this.http.get<Films>(url);
  }
}
