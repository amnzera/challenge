import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DetailsComponent} from "./pages/details/details.component";
import {ComicsComponent} from "./pages/comics/comics.component";
import {DetailComicComponent} from "./pages/detail-comic/detail-comic.component";
import {SeriesComponent} from "./pages/series/series.component";
import {SerieDetailComponent} from "./pages/serie-detail/serie-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'comics',
    component: ComicsComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'detail-comic',
    component: DetailComicComponent,
  },
  {
    path: 'serie-detail',
    component: SerieDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
