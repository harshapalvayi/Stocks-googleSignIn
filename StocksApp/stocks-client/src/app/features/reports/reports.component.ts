import {Component, OnChanges, OnInit} from '@angular/core';
import {StocksService} from '../../services/stocks/stocks.service';
import {Chart} from '../../shared/templates/models/chart';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.sass']
})
export class ReportsComponent implements OnInit, OnChanges {

  public chart: Chart;

  constructor(private stocksService: StocksService) { }

  ngOnInit() {
    this.buildReportData();
  }

  ngOnChanges(): void {
    this.buildReportData();
  }

  buildReportData() {
    this.stocksService.getAllStocks().subscribe(stocks => {
      this.buildCharts(stocks);
    });
  }

  buildCharts(data) {
    const labels = [];
    const price = [];
    const datasets = [];
    if (data) {
      data.sort((a, b) => a.price - b.price);
      data.forEach(s => {
        labels.push(s.symbol);
        price.push(s.price);
      });
      datasets.push({
        label: 'My Stocks',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: price
      });

    }
    this.chart = { labels, datasets };
  }
}
