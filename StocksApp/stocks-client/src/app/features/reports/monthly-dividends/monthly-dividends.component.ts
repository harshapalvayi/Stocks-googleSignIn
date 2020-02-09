import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Stock} from '../../../shared/templates/models/stock';

@Component({
  selector: 'app-monthly-dividends',
  templateUrl: './monthly-dividends.component.html',
  styleUrls: ['./monthly-dividends.component.sass']
})
export class MonthlyDividendsComponent implements OnInit, OnChanges {

  @Input() stocks: Stock[];
  total: number;
  cols: any[];
  constructor() {
    this.cols = [
      {field: 'symbol', header: 'Ticker', width: '10%'},
      {field: 'name', header: 'Stock', width: '35%'},
      {field: 'ex_date', header: 'Ex Date', width: '15%'},
      {field: 'pay_date', header: 'Pay Date', width: '15%'},
      {field: 'symbol', header: 'Shares', width: '10%'},
      {field: 'total', header: 'Total', width: '15%'}
    ];
  }

  ngOnInit() { }

  ngOnChanges(): void {
    if (this.stocks) {
      this.getTotals(this.stocks);
    }
  }

  getTotals(data) {
    return data.shares * (data.dividend / 4);
  }
}
