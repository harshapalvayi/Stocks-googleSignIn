import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CoreModule} from '../../core/core.module';
import {PrimengModule} from '../../shared/primeng.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StocksService} from '../../services/stocks/stocks.service';
import {TemplatesModule} from '../../shared/templates/templates.module';
import {AddStocksComponent} from './add-stocks/add-stocks.component';

@NgModule({

  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    PrimengModule,
    TemplatesModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, AddStocksComponent],
  providers: [ StocksService, FormBuilder],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
