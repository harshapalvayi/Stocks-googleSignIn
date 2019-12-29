import {Component, OnInit, ViewChild} from '@angular/core';
import {StocksService} from '../../services/stocks/stocks.service';
import {Stock} from '../../shared/templates/models/stock';
import {AddStocksComponent} from './add-stocks/add-stocks.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  @ViewChild(AddStocksComponent, {static: false}) addStock: AddStocksComponent;
  public stocks: Stock[];
  public total: number;
  constructor(private stockService: StocksService) { }

  ngOnInit() {
    this.buildTableData();
  }

  buildTableData() {
    this.stockService.getAllStocks().subscribe(stocks => {
      this.stocks = stocks;
      if (this.stocks && this.stocks.length > 0) {
        this.stockService.getTotal().subscribe(total => this.total = total);
      }
    });
  }

  onAddStocks() {
      this.buildTableData();
  }

  addStockPopup() {
    this.addStock.showDialog();
  }

}
