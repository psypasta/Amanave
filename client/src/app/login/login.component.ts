import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  loginYes = false;
  loginNo = false;
  credentials = {
    usernameOrEmail: null,
    password: null,
  };
  login(): void {
    console.log('here i am');
    this.authService.login(this.credentials).subscribe(
      token => {
        localStorage.setItem('token', token.accessToken);
        console.log(localStorage.getItem('token'));
        this.router.navigate(['./dashboard']);
       return;
      }
    );
  }
}
