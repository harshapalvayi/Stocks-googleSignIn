import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDividendsComponent } from './monthly-dividends.component';

describe('MonthlyDividendsComponent', () => {
  let component: MonthlyDividendsComponent;
  let fixture: ComponentFixture<MonthlyDividendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDividendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDividendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
