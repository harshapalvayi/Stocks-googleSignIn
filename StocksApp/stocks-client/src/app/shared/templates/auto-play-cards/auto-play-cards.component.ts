import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../models/stock';

@Component({
  selector: 'app-auto-play-cards',
  templateUrl: './auto-play-cards.component.html',
  styleUrls: ['./auto-play-cards.component.sass']
})
export class AutoPlayCardsComponent implements OnInit {

  @Input() public stocks: Stock[];
  constructor() { }

  ngOnInit() {}

}
