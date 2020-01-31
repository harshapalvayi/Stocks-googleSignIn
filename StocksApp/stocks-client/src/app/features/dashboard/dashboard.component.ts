import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {StocksService} from '../../services/stocks/stocks.service';
import {Stock} from '../../shared/templates/models/stock';
import {AddStocksComponent} from './add-stocks/add-stocks.component';
import {TableCardsComponent} from '../../shared/templates/table-cards/table-cards.component';
import {UserService} from "../../services/user/user.service";
import {User} from "../../shared/domain/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnChanges {

  @ViewChild(AddStocksComponent, {static: false}) addStock: AddStocksComponent;
  @ViewChild(TableCardsComponent, {static: false}) deleteStock: AddStocksComponent;
  public stocks: Stock[];
  public total: number;
  public userInfo: User;
  public stockCount: number;
  constructor(private userService: UserService,
              private stockService: StocksService) { }

  ngOnInit() {
    this.getUserData();
  }

  ngOnChanges(): void {
    this.getUserData();
  }

  private getUserData() {
    this.userService.getUserData().subscribe(d => {
      this.userInfo = d;
      this.buildTableData();
    });
  }

  private buildTableData() {
    this.stockService.getAllStocks(this.userInfo.id).subscribe(stocks => {
      this.stocks = stocks;
      if (stocks && stocks.length > 0) {
        this.stockCount = stocks.length;
        this.stockService.getTotal().subscribe(total => this.total = total);
      }
    });
  }

  onDeleteStock() {
    this.buildTableData();
  }

  onAddStocks() {
      this.buildTableData();
  }

  addStockPopup() {
    this.addStock.showDialog();
  }

}
