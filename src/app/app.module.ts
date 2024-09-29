import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterService } from './core/services/character.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { DetailComicComponent } from './pages/detail-comic/detail-comic.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SeriesComponent } from './pages/series/series.component';
import { SerieDetailComponent } from './pages/serie-detail/serie-detail.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    PaginatorComponent,
    DetailsComponent,
    ListGroupComponent,
    ComicsComponent,
    DetailComicComponent,
    LoadingComponent,
    SeriesComponent,
    SerieDetailComponent,
    SearchComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
