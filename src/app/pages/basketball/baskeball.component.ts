import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baskeball',
  templateUrl: './baskeball.component.html',
  styleUrls: ['./baskeball.component.less']
})
export class BaskeballComponent implements OnInit {
  i = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.i++);
  }

}
