import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Result} from "../../core/interfaces/root";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() character!: Result;
  @Output() clickEmitter = new EventEmitter;

  constructor() {
  }

  ngOnInit(): void {
  }

  favoriteCharacter(character: Result) {
    character.favorite = !character.favorite
    if (character) {

    }
  }

}
