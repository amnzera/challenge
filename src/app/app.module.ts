import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CharacterService} from './core/services/character.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './modules/rick-and-morty/pages/home/home.component';
import {CardComponent} from './components/card/card.component';
import {LoadingComponent} from './components/loading/loading.component';
import {SearchComponent} from './components/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FavoritesComponent} from './modules/rick-and-morty/pages/favorites/favorites.component';
import {WarningComponent} from './components/warning/warning.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    LoadingComponent,
    SearchComponent,
    FavoritesComponent,
    WarningComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
