import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum8Component } from './praktikum8.component';

describe('Praktikum8Component', () => {
  let component: Praktikum8Component;
  let fixture: ComponentFixture<Praktikum8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
