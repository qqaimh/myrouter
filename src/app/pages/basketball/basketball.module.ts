import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketballRoutingModule } from './basketball-routing.module';
import { BaskeballComponent } from './baskeball.component';


@NgModule({
  declarations: [BaskeballComponent],
  imports: [
    CommonModule,
    BasketballRoutingModule
  ]
})
export class BasketballModule { }
