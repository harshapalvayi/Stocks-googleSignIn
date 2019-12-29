import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../models/stock';

@Component({
  selector: 'app-table-cards',
  templateUrl: './table-cards.component.html',
  styleUrls: ['./table-cards.component.sass']
})
export class TableCardsComponent implements OnInit {

  @Input() stocks: Stock[];
  cols: any[];

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'symbol', header: 'Ticker' },
      {field: 'name', header: 'Stock' },
      { field: 'price', header: 'Price' },
      { field: 'shares', header: 'Shares' }
    ];
  }
}
