import { Component, OnInit } from '@angular/core';
import { RootAbstract } from '../../shared/class/root-abstract';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent extends RootAbstract implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
