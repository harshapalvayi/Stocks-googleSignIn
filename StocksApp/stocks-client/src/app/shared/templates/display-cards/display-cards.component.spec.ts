import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardsComponent } from './display-cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('DisplayCardsComponent', () => {
  let component: DisplayCardsComponent;
  let fixture: ComponentFixture<DisplayCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCardsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
