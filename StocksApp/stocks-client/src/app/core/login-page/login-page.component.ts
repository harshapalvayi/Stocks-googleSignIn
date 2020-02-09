import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {JwtAuthenticationService} from '../../services/jwt/jwt-authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  private invalidLogin = false;
  public loginForm: FormGroup = null;
  constructor(private router: Router, private jwtService: JwtAuthenticationService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  submit() {
    this.jwtService.executeJWTAuthentication(this.loginForm.value)
      .subscribe(data => {
          console.log(data);
          this.router.navigate(['app-landing-page']);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

}
