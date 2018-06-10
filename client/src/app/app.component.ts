import { Component } from '@angular/core';
import {User} from "./model/user";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService: LoginService) { }

  user: User = new User;
  title = 'app';
  loginYes = false;
  loginNo = false;
  loginCred = {
    usernameOrEmail: null,
    password: null,
  };

  login(){
    this.loginService.login(this.loginCred).subscribe(loginCred=> {
    },
      (error) =>{ this.loginNo = true;
      this.loginYes = false;
      console.log("Login failure");

      },
      () =>{ this.loginYes = true;
      this.loginNo = false;
      console.log("Login Success");
    })
  }
}
