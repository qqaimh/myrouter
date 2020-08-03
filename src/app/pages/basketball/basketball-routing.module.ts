import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaskeballComponent } from './baskeball.component';

const routes: Routes = [{path: '', component: BaskeballComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketballRoutingModule { }
