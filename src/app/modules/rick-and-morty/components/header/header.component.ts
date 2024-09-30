import {Component, OnInit} from '@angular/core';
import {RootAbstract} from '../../class/root-abstract';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends RootAbstract implements OnInit {
  public counter: number = 0;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
