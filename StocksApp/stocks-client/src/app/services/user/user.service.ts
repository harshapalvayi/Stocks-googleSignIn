import { Injectable } from '@angular/core';
import {User} from '../../shared/domain/user';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: Subject<User> = new Subject<User>();

  constructor() {}

  getUserData() {
    return this.userData;
  }

  setSharedUserInfo(user: User) {
    this.userData.next({...user});
  }

 /* authenticateUser() {
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

}*/

  authenticate(username, password) {
    if(username && password) {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }

}
