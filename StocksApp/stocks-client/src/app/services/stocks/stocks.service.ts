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
        shares: [null]
     });
     return this.addStock;
  }


  save(stockData: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${this.baseUrl}/save`, stockData);
  }

  getStockName(ticker: string): Observable<string> {
      return this.http.get<string>(`${this.baseUrl}/ticker/${ticker}`);
  }

  getAllStocks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

}
