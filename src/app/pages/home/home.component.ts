import {Component, OnInit} from '@angular/core';
import {take} from "rxjs";
import {Result, Root} from "../../core/interfaces/root";
import {RootAbstract} from "../../shared/class/root-abstract";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends RootAbstract implements OnInit {

  payload: { page: number, filter: string } = {page: 1, filter: ''}
  characters: Result[] = [];
  offset: number = 0;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getCharacters()
  }

  paginator(offset: any) {
    this.offset = this.offset + offset;
    this.getCharacters()
  }

  filter(filterValue: string) {
    this.payload.filter = filterValue;
    this.getCharacters()
  }

  getCharacters() {
    this.characterService.getAllCharacters(this.payload)
      .pipe(take(1))
      .subscribe((response: Root) => {
        this.characters = response.results
      })
  }

}
