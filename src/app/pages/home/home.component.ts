import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../core/services/character.service";
import {take} from "rxjs";
import {Router} from "@angular/router";
import {Result, Root} from "../../core/interfaces/root";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: Result[] = [];
  offset: number = 0;

  constructor(private characterService: CharacterService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCharacters()
  }

  paginator(offset: any) {
    this.offset = this.offset + offset;
    this.getCharacters()
  }

  getCharacters() {
    this.characterService.getAllCharacters(1)
      .pipe(take(1))
      .subscribe((response: Root) => {
        this.characters = response.results
      })
  }

  details(hero: any) {
    this.characterService.setHero(hero);
    this.router.navigate(['/details'])
  }

  favoriteCharacter(character: Result) {
    character.favorite = !character.favorite
    if (character.favorite) {
      (this.characterService.favoriteCharacters.value).push(character)
      const newCharacter = this.characterService.favoriteCharacters.value
      this.characterService.favoriteCharacters.next(newCharacter)
      return
    }
    const characterId = character.id
    const currentFavorites = this.characterService.favoriteCharacters.value;
    const updatedFavorites = currentFavorites.filter((c) => c.id !== characterId) as Result[]
    this.characterService.favoriteCharacters.next(updatedFavorites)
  }


}
