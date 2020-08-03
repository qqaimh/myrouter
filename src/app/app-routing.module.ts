import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/lol'},
  {path: 'football', loadChildren: () => import('./pages/football/football.module').then(m => m.FootballModule)},
  {path: 'basketball', loadChildren: () => import('./pages/basketball/basketball.module').then(m => m.BasketballModule)},
  {path: 'basketball', loadChildren: () => import('./pages/basketball/basketball.module').then(m => m.BasketballModule), outlet: 'tony'},
  {path: 'lol', loadChildren: () => import('./pages/lol/lol.module').then(m => m.LolModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
