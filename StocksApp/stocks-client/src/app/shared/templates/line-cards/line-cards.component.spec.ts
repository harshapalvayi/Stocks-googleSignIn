import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCardsComponent } from './line-cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('LineCardsComponent', () => {
  let component: LineCardsComponent;
  let fixture: ComponentFixture<LineCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineCardsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
