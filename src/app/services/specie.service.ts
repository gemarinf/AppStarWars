import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specie } from '../models/specie';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  constructor(private http: HttpClient) { }

  getSpecie(url:string): Observable<Specie> {
    return this.http.get<Specie>(url);
  }
}
