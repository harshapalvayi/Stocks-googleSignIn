import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.sass']
})
export class StartPageComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef,
              private ngZone: NgZone,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    if (this.userService.isUserLoggedIn()) {
      this.router.navigateByUrl('/app-dashboard');
    } else {
      this.router.navigateByUrl('/app-login-page');
    }
  }
}
