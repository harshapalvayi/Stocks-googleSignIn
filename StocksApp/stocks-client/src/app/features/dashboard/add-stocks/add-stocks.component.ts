import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {StocksService} from '../../../services/stocks/stocks.service';
import {Stock} from '../../../models/Stock';

@Component({
  selector: 'app-add-stocks',
  templateUrl: './add-stocks.component.html',
  styleUrls: ['./add-stocks.component.sass']
})
export class AddStocksComponent implements OnInit {

  @Output() saved = new EventEmitter<Stock>();
  public addStock: FormGroup;
  public showFlag: boolean;
  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addStock = this.stockService.create();
  }

  resetStock() {
    this.addStock.reset();
  }

  showDialog() {
    this.showFlag = true;
  }

  onCancel() {
    this.resetStock();
    this.showFlag = false;
  }

  onSubmitStock() {
    const stockData = this.addStock.getRawValue();
    this.stockService.save(stockData).subscribe(() => {
      this.saved.emit(stockData);
      this.resetStock();
      this.showFlag = false;
    });
  }
}
