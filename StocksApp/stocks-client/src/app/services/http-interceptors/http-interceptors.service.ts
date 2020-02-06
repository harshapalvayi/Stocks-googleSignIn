import { Injectable } from '@angular/core';
import {JwtAuthenticationService} from '../jwt/jwt-authentication.service';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorsService implements HttpInterceptor {

  constructor(private jwtService: JwtAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if(this.jwtService.getAuthenticatedToken() && this.jwtService.getAuthenticatedUser()) {
      request = request.clone({
        setHeaders : {
          Authorization : this.jwtService.getAuthenticatedToken()
        }
      })
    }
    return next.handle(request);
  }
}
