import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'angular-6-social-login';
import {User} from '../../shared/domain/user';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public userData: User;
  constructor(
    private ref: ChangeDetectorRef,
    private ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private socialAuthService: AuthService) { }

  ngOnInit() {
     this.navigate();
  }

  // On hitting logo it should reroute to default page
  navigate() {
    this.userService.getUserData().subscribe(data => {
      if (data) {
        this.userData = data;
        this.ngZone.run(() => this.router.navigateByUrl('/app-dashboard'));
      }
    });
  }

  public navigateToDefaultPage() {
    this.ngZone.run(() => this.router.navigateByUrl('/app-dashboard'));
  }

  public signOut(socialPlatform : string) {
    this.userService.setSharedUserInfo({});
     this.socialAuthService.signOut().then( () => {
       this.ngZone.run(() => this.router.navigateByUrl('/'));
       this.userService.authenticateUser();
     });
  }
}
