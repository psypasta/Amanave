import { Component } from '@angular/core';

import {User} from "../model/user";
import {LoginService} from "../service/login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	//model = new User('psy', 'Robin', 'robin@gmail.com', 'psypsy');
	user: User = new User;
	loginYes = false;
  	loginNo = false;
  	loginCred = {
    	usernameOrEmail: null,
    	password: null
  	};

	constructor(private loginService: LoginService) { }

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
