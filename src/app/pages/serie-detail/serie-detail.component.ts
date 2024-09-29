import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../core/services/character.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss'],
})
export class SerieDetailComponent implements OnInit {
  public serie$ = new Subject<any>();

  constructor(private marvelService: CharacterService) {}

  ngOnInit(): void {
    this.serie$ = this.marvelService.serie;
    window.scroll({ behavior: 'smooth', top: 0, left: 0 });
  }

  getImage(character: any) {
    return this.marvelService.getImage(character.thumbnail);
  }
}
