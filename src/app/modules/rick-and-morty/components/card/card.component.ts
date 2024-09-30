import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Result} from '../../interfaces/root';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() character!: Result;
  @Output() favoriteEmitter = new EventEmitter<Result>();
}
