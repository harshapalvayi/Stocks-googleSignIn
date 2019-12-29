import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stock} from '../../models/Stock';

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
        symbol: ['', Validators.required],
        avg_price: [null, Validators.required],
        shares: [null]
     });
     return this.addStock;
  }


  save(stockData: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${this.baseUrl}/save`, stockData);
  }

  getStockDetails(ticker: string): Observable<Stock> {
      return this.http.get<Stock>(`${this.baseUrl}/ticker/${ticker}`);
  }

  getAllStocks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  getTotal(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total`);
  }
}
