import { Injectable } from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angular-6-social-login';
import {User} from '../../shared/domain/user';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: Subject<User> = new Subject<User>();

  constructor(private authService: AuthService) {}

  getUserData() {
    return this.userData;
  }

  setSharedUserInfo(user: User) {
    this.userData.next({...user});
  }

  authenticateUser() {
    setTimeout(() => {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        if (userData) {
          console.log('user', userData);
          this.setSharedUserInfo(userData);
        }
      }
    );
  },2000);

}

}
