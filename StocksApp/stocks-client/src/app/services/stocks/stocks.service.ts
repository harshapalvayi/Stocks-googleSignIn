import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stock} from '../../models/Stock';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private baseUrl = 'http://localhost:8080/api/stocks';

  private addStock: FormGroup;
  constructor(  private fb: FormBuilder,
                private http: HttpClient) { }

  create(): FormGroup {
     this.addStock  = this.fb.group({
        stock_symbol: ['', Validators.required],
        stock_name: ['', Validators.required],
        stock_price: [null],
        stock_dividend: [null],
        shares: [null]
     });
     return this.addStock;
  }

  save(stockData: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${this.baseUrl}/save`, stockData);
  }
}
