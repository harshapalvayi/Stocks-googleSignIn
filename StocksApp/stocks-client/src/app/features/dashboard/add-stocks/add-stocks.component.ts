import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {StocksService} from '../../../services/stocks/stocks.service';
import {Stock} from '../../../shared/templates/models/stock';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../shared/domain/user';

@Component({
  selector: 'app-add-stocks',
  templateUrl: './add-stocks.component.html',
  styleUrls: ['./add-stocks.component.sass']
})
export class AddStocksComponent implements OnInit {

  @Output() saved = new EventEmitter<Stock>();
  public userInfo: User;
  public addStock: FormGroup;
  public showFlag: boolean;
  constructor(private stockService: StocksService, private user: UserService) { }

  ngOnInit() {
    this.getUserData();
    this.createForm();
  }

  createForm() {
    this.addStock = this.stockService.create();
  }

  getUserData() {
    this.user.getUserData().subscribe(d => {
      this.userInfo = d;
    });
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
    let stockData = this.addStock.getRawValue();
    if (this.userInfo && this.userInfo.id) {
      stockData = {user_id: this.userInfo.id, ...stockData};
      this.stockService.save(stockData).subscribe(() => {
        this.saved.emit(stockData);
        this.resetStock();
        this.showFlag = false;
      });
    }
  }
}
