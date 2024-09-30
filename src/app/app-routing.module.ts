import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rick-and-morty/home',
    pathMatch: 'full',
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./modules/rick-and-morty/rick-and-morty.module').then((m) => m.RickAndMortyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
