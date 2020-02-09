import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import {ContactsComponent} from './contacts.component';
import {CoreModule} from '../../core/core.module';


@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
