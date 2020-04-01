import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum9Component } from './praktikum9.component';

describe('Praktikum9Component', () => {
  let component: Praktikum9Component;
  let fixture: ComponentFixture<Praktikum9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
