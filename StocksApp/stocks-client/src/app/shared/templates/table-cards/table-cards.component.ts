import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stock} from '../models/stock';
import {StocksService} from '../../../services/stocks/stocks.service';

@Component({
  selector: 'app-table-cards',
  templateUrl: './table-cards.component.html',
  styleUrls: ['./table-cards.component.sass']
})
export class TableCardsComponent implements OnInit {

  @Output() deleted = new EventEmitter<boolean>();
  @Output() edited = new EventEmitter<boolean>();
  @Input() stocks: Stock[];
  public cols: any[];
  public editStock: { [s: number]: Stock; } = {};

  constructor(private stockService: StocksService) { }

  ngOnInit() {

    this.cols = [
      { field: 'symbol', header: 'Ticker', width: '10%'},
      {field: 'name', header: 'Stock', width: '30%'},
      { field: 'price', header: 'Price', width: '10%'},
      { field: 'avg_price', header: 'Buy', width: '10%' },
      { field: 'shares', header: 'Shares', width: '10%' },
      { field: 'dividend', header: 'Dividend', width: '15%' },
      { field: '', header: 'Actions',  width: '15%' }
    ];
  }

  onRowEditInit(stock: Stock) {
    this.editStock[stock.id] = {...stock};
  }

  onRowEditSave(stock: Stock) {
    console.log('save stock', stock);
    if (stock) {
      this.stockService.edit(stock).subscribe(() => {
        this.edited.emit(true);
        delete this.editStock[stock.id];
      });
    }
  }

  onRowEditCancel(stock: Stock, index: number) {
    console.log('cancel stock ', stock, index);
    this.stocks[index] = this.editStock[stock.id];
    delete this.editStock[stock.id];
  }

  deleteStock(stock: Stock) {
     console.log('stock', stock);
     this.stockService.deleteStock(stock.id).subscribe(() => {
         this.deleted.emit(true);
     });
  }
}
