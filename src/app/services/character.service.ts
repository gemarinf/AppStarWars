import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter(url:string): Observable<Character> {
    return this.http.get<Character>(url);
  }
}
