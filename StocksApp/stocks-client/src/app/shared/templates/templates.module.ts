import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DisplayCardsComponent} from './display-cards/display-cards.component';
import {BarCardsComponent} from './bar-cards/bar-cards.component';
import {LineCardsComponent} from './line-cards/line-cards.component';
import {CoreModule} from '../../core/core.module';
import {PrimengModule} from '../primeng.module';
import {TableCardsComponent} from './table-cards/table-cards.component';
import {AutoPlayCardsComponent} from './auto-play-cards/auto-play-cards.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DisplayCardsComponent,
    BarCardsComponent,
    LineCardsComponent,
    TableCardsComponent,
    AutoPlayCardsComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    PrimengModule,
    CommonModule
  ],
  exports: [
    DisplayCardsComponent,
    BarCardsComponent,
    LineCardsComponent,
    TableCardsComponent,
    AutoPlayCardsComponent
  ]
})
export class TemplatesModule { }
