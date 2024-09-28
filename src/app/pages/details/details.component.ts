import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../core/services/character.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public hero$ = new Subject<any>();

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
   this.hero$ = this.characterService.hero;
  }

  getImage(character: any) {
    return this.characterService.getImage(character.thumbnail);
  }

}
