import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum3Component } from './praktikum4.component';

describe('Praktikum4Component', () => {
  let component: Praktikum4Component;
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
