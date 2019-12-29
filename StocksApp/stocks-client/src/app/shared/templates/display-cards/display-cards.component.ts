import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.sass']
})
export class DisplayCardsComponent implements OnInit {

  @Input() public title: string;
  @Input() public data: number;
  constructor() { }

  ngOnInit() {
  }

}
