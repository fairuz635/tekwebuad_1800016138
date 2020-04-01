import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum6Component } from './praktikum6.component';

describe('Praktikum6Component', () => {
  let component: Praktikum6Component;
  let fixture: ComponentFixture<Praktikum6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
