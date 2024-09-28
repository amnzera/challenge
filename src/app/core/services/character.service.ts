import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Root} from "../interfaces/root";

@Injectable({
  providedIn: 'root'
})


export class CharacterService {

  public hero = new BehaviorSubject<any>(null)
  public comic = new BehaviorSubject<any>(null)
  public serie = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) {
  }

  setHero(hero: any) {
    this.hero.next(hero)
  }

  setComic(comic: any) {
    this.hero.next(comic)
  }

  setSerie(serie: any) {
    this.serie.next(serie)
  }

  getImage(thumbnail: any) {
    return thumbnail && `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;
  }

  getAllCharacters(page: number): Observable<Root> {
    return this.http.get<Root>(`${environment.urlApi}/character?page=${page.toString()}`);
  }


}
