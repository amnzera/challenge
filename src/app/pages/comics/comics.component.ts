import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../core/services/character.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  public comics: any
  offset: number = 0;

  constructor(private marvelService: CharacterService, private router: Router) {
  }

  ngOnInit(): void {
  }

  paginator(offset: number) {
    this.comics = null;
    this.offset = this.offset + offset;
  }


  detailsComic(comic: any) {
    this.marvelService.setComic(comic);
    this.router.navigate(['/detail-comic'])
  }

}
