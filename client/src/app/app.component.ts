import { Component } from '@angular/core';
import {User} from "./model/user";
import {UserService} from "./service/user.service";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService,
              private loginService: LoginService,
              ) { }

  user: User = new User;
  title = 'app';
  loginCred = {
    usernameOrEmail: null,
    password: null,
  };

  newUser(){
    console.log(this.loginCred);
    this.user.name = "Gurkan Burkan";
    this.user.email = "Gurkan.Burkan@junkmail.se";
    this.user.username = "Tim";
    this.user.password = "aaaaaaah";

    console.log(this.user);
    this.userService.addUser(this.user).subscribe(user=> {

    })


  }
  login(){
    this.loginService.login(this.loginCred).subscribe(loginCred=>{
      console.log(loginCred);

    })
  }
}
