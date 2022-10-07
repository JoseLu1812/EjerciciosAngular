import { Component, OnInit } from '@angular/core';
import { Move, MoveResponse, NamesM } from 'src/app/interfaces/pokemon-moves.interface';
import { Pokemon, PokemonResponse } from 'src/app/interfaces/pokemon-response.interface';
import { Tipo } from 'src/app/interfaces/pokemon-type.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];

  listadoMoves: NamesM[] = [];

  listadoTipos: Tipo[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response => {
      this.listadoPokemon = response.results;
    });

    this.pokemonService.moveList().subscribe(response => {
          this.listadoMoves = response.names;
    });

    this.pokemonService.tipoList().subscribe(response => {
      this.listadoTipos = response.names;
    });

  } 

}
