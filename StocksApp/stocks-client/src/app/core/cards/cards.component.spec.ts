import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
