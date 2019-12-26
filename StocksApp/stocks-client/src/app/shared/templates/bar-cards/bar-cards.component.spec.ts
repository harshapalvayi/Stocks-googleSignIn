import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCardsComponent } from './bar-cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('BarCardsComponent', () => {
  let component: BarCardsComponent;
  let fixture: ComponentFixture<BarCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarCardsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
