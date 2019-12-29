import {Component, Input, OnInit} from '@angular/core';
import {Chart} from '../models/chart';

@Component({
  selector: 'app-bar-cards',
  templateUrl: './bar-cards.component.html',
  styleUrls: ['./bar-cards.component.sass']
})
export class BarCardsComponent implements OnInit {

  @Input() data: Chart;
  constructor() {}

  ngOnInit() {
  }

}
