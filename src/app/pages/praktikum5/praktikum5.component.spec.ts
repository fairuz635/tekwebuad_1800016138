import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum5Component } from './praktikum5.component';

describe('Praktikum5Component', () => {
  let component: Praktikum5Component;
  let fixture: ComponentFixture<Praktikum5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
