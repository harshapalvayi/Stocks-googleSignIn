import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found-component';
import {PrimengModule} from '../shared/primeng.module';
import {StartPageComponent} from './start-page/start-page.component';
import {CardsComponent} from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    StartPageComponent,
    PageNotFoundComponent
],
  exports: [
    HeaderComponent,
    CardsComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
