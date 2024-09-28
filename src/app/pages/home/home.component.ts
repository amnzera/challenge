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

  constructor(private marvelService: CharacterService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCharacters()
  }

  paginator(offset: any) {
    this.offset = this.offset + offset;
    this.getCharacters()
  }

  getCharacters() {
    this.marvelService.getAllCharacters(1)
      .pipe(take(1))
      .subscribe((response: Root) => {
        this.characters = response.results
      })
  }

  details(hero: any) {
    this.marvelService.setHero(hero);
    this.router.navigate(['/details'])
  }


}
