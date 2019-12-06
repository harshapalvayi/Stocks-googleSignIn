import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CoreModule} from '../../core/core.module';
import {PrimengModule} from '../../shared/primeng.module';
import {ReactiveFormsModule} from '@angular/forms';
import {StocksService} from '../../services/stocks/stocks.service';

@NgModule({

  imports: [
    CommonModule,
    CoreModule,
    PrimengModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: [ StocksService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
