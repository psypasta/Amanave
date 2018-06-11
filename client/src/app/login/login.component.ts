import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenStorage } from '../storage/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private token: TokenStorage) {
  }

  loginYes = false;
  loginNo = false;
  credentials = {
    usernameOrEmail: null,
    password: null,
  };

  login(): void {
    console.log('here i am');
    this.authService.attemptAuth(this.credentials).subscribe(
      data => {
       return this.token.saveToken(data.token);
        // this.router.navigate(['user']);
      }
    );
  }

}
