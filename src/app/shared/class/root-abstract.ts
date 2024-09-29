import {inject} from "@angular/core";
import {CharacterService} from "../../core/services/character.service";
import {Result} from "../../core/interfaces/root";

export class RootAbstract {

  public characterService = inject(CharacterService);

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
