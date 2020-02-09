import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found-component';
import {PrimengModule} from '../shared/primeng.module';
import {StartPageComponent} from './start-page/start-page.component';
import {CardsComponent} from './cards/cards.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutComponent } from './logout/logout.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        PrimengModule,
        RouterModule,
        ReactiveFormsModule
    ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    StartPageComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    LogoutComponent
],
  exports: [
    HeaderComponent,
    CardsComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
