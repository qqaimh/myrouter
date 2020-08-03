import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballComponent } from './football.component';

const routes: Routes = [{path: '', component: FootballComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootballRoutingModule { }
