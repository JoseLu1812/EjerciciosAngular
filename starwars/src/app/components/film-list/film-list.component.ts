
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/films.interface';
import { Character } from 'src/app/interfaces/person.interface';
import { FilmService } from 'src/app/services/film.service';
import { Specie } from "src/app/interfaces/species.interface";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

//  filmList: Film[] = [];
  characterList: Character[] = [];
  speciesList: Specie[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getCharacter().subscribe(response =>{
      this.characterList = response.results;
    });

    this.filmService.getSpecie().subscribe(response => {
      this.speciesList = response.results;
    })
  }

  getImageSpecie(specie: Specie) {
    let id = specie.url.split("/").reverse()[1];
    debugger;
    return `https://starwars-visualguide.com//assets/img/species/${id}.jpg`;
  }

  getImageCharacter(character: Character) {
    let id = character.url.split("/").reverse()[1];
    debugger;
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }

  getFilms(character: Character) {
    let tittle = character.films;
  }

}
