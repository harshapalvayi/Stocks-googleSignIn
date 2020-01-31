import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SocialLoginModule} from './auth.module';
import {AuthServiceConfig} from 'angular-6-social-login';
import {getAuthServiceConfig} from './app-config';
import {BasicHttpInterceptorService} from './services/basicHttpInterceptor/basic-http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [

    /*{ provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptorService, multi: true },
*/
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfig
    }
  ],
})
export class AppModule { }
