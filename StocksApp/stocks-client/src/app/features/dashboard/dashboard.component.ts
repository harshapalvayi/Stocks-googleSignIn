import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {StocksService} from '../../services/stocks/stocks.service';
import {Stock} from '../../shared/templates/models/stock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public addStock: FormGroup;
  public stocks: Stock[];
  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.createForm();
    this.buildTableData();
  }

  createForm() {
    this.addStock = this.stockService.create();
  }

  resetStock() {
    this.addStock.reset();
  }

  buildTableData() {
    this.stockService.getAllStocks().subscribe(stocks => this.stocks = stocks);
  }

  onSubmitStock() {
    const stockData = this.addStock.getRawValue();
    this.stockService.save(stockData).subscribe(() => {
      this.buildTableData();
    });
  }
}
