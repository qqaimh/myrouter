import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaskeballComponent } from './baskeball.component';

describe('BaskeballComponent', () => {
  let component: BaskeballComponent;
  let fixture: ComponentFixture<BaskeballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaskeballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaskeballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
