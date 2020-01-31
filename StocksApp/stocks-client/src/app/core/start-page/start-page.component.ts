import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from 'angular-6-social-login';
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
              private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserData().subscribe(data => {
      if (data) {
        this.router.navigateByUrl('/app-dashboard');
      }
    });
  }
}
