import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BasicHttpInterceptorService {

  constructor(private user: UserService) { }

  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request;
    this.user.shareUserInfo().subscribe(user => {
      if (user && user.id) {
        console.log('request', request);
        return next.handle(req);
      }
    });
    return next.handle( req.clone());
  }*/
}
