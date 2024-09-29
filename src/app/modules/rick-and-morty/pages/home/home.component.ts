import {Component, OnInit} from '@angular/core';
import {finalize, take} from 'rxjs';
import {Result, Root} from '../../../../core/interfaces/root';
import {RootAbstract} from '../../../../shared/class/root-abstract';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends RootAbstract implements OnInit {
  payload: { page: number; filter: string } = {page: 1, filter: ''};
  charactersFilters: Result[] = [];
  characters: Result[] = [];
  errorCharacters: boolean = false;

  constructor() {
    super();
  }

  onScrollDown() {
    this.payload.page = this.payload.page + 1;
    this.getCharacters()
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  listenFavorites(): void {
    this.characterService.favoriteCharacters
      .pipe(take(1))
      .subscribe((characterFavorite: Result[]) => {
        if (characterFavorite.length > 0) {
          characterFavorite.forEach((favorite: Result) => {
            this.characters = this.characters.map((character: Result) => {
              if (character.id === favorite.id) {
                character.favorite = true;
              }
              return character;
            });
          })

        }
      })
  }

  filter(filterValue: string) {
    this.payload.page = 1;
    this.payload.filter = filterValue;
    this.getCharacters();
  }

  getListCharacter() {
    if (this.payload.filter) {
      return this.charactersFilters
    }
    return this.characters
  }

  getCharacters() {
    this.characterService
      .getAllCharacters(this.payload)
      .pipe(take(1), finalize(() => this.listenFavorites()))
      .subscribe({
        next: (response: Root) => {
          this.errorCharacters = false;
          if (this.payload.filter && this.payload.filter !== '') {
            this.characters = [];
            this.charactersFilters = response.results;
            return
          }
          this.characters = [...this.characters, ...response.results];
        },
        error: () => {
          this.errorCharacters = true;
        }
      });
  }
}
