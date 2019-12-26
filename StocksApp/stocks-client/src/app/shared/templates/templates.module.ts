import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DisplayCardsComponent} from './display-cards/display-cards.component';
import {BarCardsComponent} from './bar-cards/bar-cards.component';
import {LineCardsComponent} from './line-cards/line-cards.component';
import {CoreModule} from '../../core/core.module';
import {PrimengModule} from '../primeng.module';
import {TableCardsComponent} from './table-cards/table-cards.component';


@NgModule({
  declarations: [
    DisplayCardsComponent,
    BarCardsComponent,
    LineCardsComponent,
    TableCardsComponent
  ],
  imports: [
    CoreModule,
    PrimengModule,
    CommonModule
  ],
  exports: [
    DisplayCardsComponent,
    BarCardsComponent,
    LineCardsComponent,
    TableCardsComponent
  ]
})
export class TemplatesModule { }
