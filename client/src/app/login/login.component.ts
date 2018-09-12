import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginYes = false;
  loginNo = false;
  credentials = {
    usernameOrEmail: null,
    password: null,
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  @Input()loggedIn;
  @Output() logEvent = new EventEmitter<boolean>();

  loginEvent(loggedIn: boolean) {
    this.logEvent.emit(loggedIn);
    console.log(loggedIn);
    this.router.navigateByUrl('/usersList');
  }

  login(): void {
    console.log('here i am');
    this.authService.login(this.credentials).subscribe(
      token => {
        localStorage.setItem('token', token.accessToken);
        console.log(localStorage.getItem('token'));
        },
      error => {
        console.log('Login failed');
        this.loginNo = true;

      },
      () => {
        console.log(this.loggedIn);
       this.loggedIn = true;
       this.loginEvent(this.loggedIn);
       console.log(this.loggedIn);
      });
  }
}
