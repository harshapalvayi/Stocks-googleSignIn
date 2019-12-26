import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsComponent} from './reports.component';
import {TemplatesModule} from '../../shared/templates/templates.module';
import {PrimengModule} from '../../shared/primeng.module';


@NgModule({
  imports: [
    CommonModule,
    TemplatesModule,
    PrimengModule,
    ReportsRoutingModule
  ],
  declarations: [ReportsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReportsModule { }
