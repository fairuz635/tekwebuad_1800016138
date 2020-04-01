import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum3Component } from './praktikum3.component';

describe('Praktikum3Component', () => {
  let component: Praktikum3Component;
  let fixture: ComponentFixture<Praktikum3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
