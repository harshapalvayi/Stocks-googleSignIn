import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCardsComponent } from './table-cards.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('TableCardsComponent', () => {
  let component: TableCardsComponent;
  let fixture: ComponentFixture<TableCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCardsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
