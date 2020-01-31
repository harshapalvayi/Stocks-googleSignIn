import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsComponent} from './reports.component';
import {TemplatesModule} from '../../shared/templates/templates.module';
import {PrimengModule} from '../../shared/primeng.module';
import {StocksService} from '../../services/stocks/stocks.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MonthlyDividendsComponent} from './monthly-dividends/monthly-dividends.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    TemplatesModule,
    ReactiveFormsModule,
    ReportsRoutingModule
  ],
  declarations: [ReportsComponent, MonthlyDividendsComponent],
  providers: [ StocksService, FormBuilder],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportsModule { }
