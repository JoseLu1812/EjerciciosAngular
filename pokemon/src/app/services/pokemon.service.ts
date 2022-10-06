import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveResponse } from '../interfaces/pokemon-moves.interface';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';
import { TipoResponse } from "../interfaces/pokemon-type.interface";

const API_BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

// Pokemon
  public pokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon`);
  }

  public getPokemon(id: string) {
    return this.http.get(`${API_BASE_URL}/pokemon/${id}`);
  }

// Tipo
  public tipoList(): Observable<TipoResponse> {
    return this.http.get<TipoResponse>(`${API_BASE_URL}/type`)
  }

  public getTipo(id: string) {
    return this.http.get(`${API_BASE_URL}/type/${id}`);
  }

// Movimiento

  public moveList(): Observable<MoveResponse> {
    return this.http.get<MoveResponse>(`${API_BASE_URL}/move-ailment`)
  }

  public getMove(id: string){
    return this.http.get(`${API_BASE_URL}/move-ailment/${id}`)
  }


}
