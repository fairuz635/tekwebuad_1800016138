import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum10Component } from './praktikum10.component';

describe('Praktikum10Component', () => {
  let component: Praktikum10Component;
  let fixture: ComponentFixture<Praktikum10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
