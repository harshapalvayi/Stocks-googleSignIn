import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from 'angular-6-social-login';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ]
})

export class SocialLoginModule {
}
