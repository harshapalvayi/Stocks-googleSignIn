import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {StocksService} from '../../services/stocks/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public addStock: FormGroup;
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

  onSubmitStock() {
    const stockData = this.addStock.getRawValue();
    console.log('stockData', stockData);
    this.stockService.save(stockData)
      .subscribe(res => {
        console.log("data saved !!!" , res);
      })
  }

}
