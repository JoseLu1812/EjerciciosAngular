import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsResponse } from '../interfaces/films.interface';
import { CharacterResponse } from '../interfaces/person.interface';
import { SpecieResponse } from '../interfaces/species.interface';

const API_BASE_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${API_BASE_URL}/films/`);
  }

  getCharacter(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${API_BASE_URL}/people/`);
  }

  getSpecie(): Observable<SpecieResponse> {
    return this.http.get<SpecieResponse>(`${API_BASE_URL}/species/`)
  }

}
