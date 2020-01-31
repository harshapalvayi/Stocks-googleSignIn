import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stock} from '../../shared/templates/models/stock';
import {Dates} from '../../models/dates';

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

  edit(stockData: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${this.baseUrl}/edit`, stockData);
  }

  getStockDetails(ticker: string): Observable<Stock> {
      return this.http.get<Stock>(`${this.baseUrl}/ticker/${ticker}`);
  }

  deleteStock(id: number) {
    console.log('id', id);
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`);
  }

  getAllStocks(userId: string): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/all/${userId}`);
  }

  getDividendStocks(date: Dates): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/dividend/${date.startDate}/${date.endDate}`);
  }

  getTotal(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total`);
  }
}
