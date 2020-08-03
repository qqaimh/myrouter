import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LolRoutingModule } from './lol-routing.module';
import { LolComponent } from './lol.component';


@NgModule({
  declarations: [LolComponent],
  imports: [
    CommonModule,
    LolRoutingModule
  ]
})
export class LolModule { }
