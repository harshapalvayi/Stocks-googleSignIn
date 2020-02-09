import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../../models/User';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';
export const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthentication(data: User) {
    const username = data.username;
    const password = data.password;
    return this.http.post<any>(
      `${API_URL}/authenticate`,{username, password})
      .pipe(map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

}
