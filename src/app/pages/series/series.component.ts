import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../core/services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  series: any;
  offset: number = 0;

  constructor(
    private marvelService: CharacterService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  paginator(offset: number) {
    this.series = null;
    this.offset = this.offset + offset;
  }

  details(serie: any) {
    this.marvelService.setSerie(serie);
    this.router.navigate(['/serie-detail']);
  }
}
