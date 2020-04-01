import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum7Component } from './praktikum7.component';

describe('Praktikum7Component', () => {
  let component: Praktikum7Component;
  let fixture: ComponentFixture<Praktikum7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
