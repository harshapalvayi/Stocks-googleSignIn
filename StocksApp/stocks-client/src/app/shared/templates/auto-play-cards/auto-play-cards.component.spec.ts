import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPlayCardsComponent } from './auto-play-cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AutoPlayCardsComponent', () => {
  let component: AutoPlayCardsComponent;
  let fixture: ComponentFixture<AutoPlayCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPlayCardsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPlayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
