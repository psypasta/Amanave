import { Component, OnInit } from '@angular/core';
import {User} from "./model/user";
import {UserService} from "./service/user.service";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService,
              private loginService: LoginService,
              ) { }

  ngOnInit() {
  }
  user: User = new User;
  title = 'app';
  userList: User[];
  loginYes = false;
  loginNo = false;
  loading = true;
  loginCred = {
    usernameOrEmail: null,
    password: null,
  };

  newUser(){
    this.user.name = "Gurkan Burkan";
    this.user.email = "Gurkan.Burkan@junkmail.se";
    this.user.username = "Tim";
    this.user.password = "aaaaaaah";

    this.userService.addUser(this.user).subscribe(user=> {

    })


  }
  login(){
    this.loginService.login(this.loginCred).subscribe(token=> {
        localStorage.setItem('token', token.accessToken);
        localStorage.getItem('token')
    },
      (error) =>{ this.loginNo = true;
      this.loginYes = false;
      console.log("Login failure");

      },
      () =>{ this.loginYes = true;
      this.loginNo = false;
      console.log("Login Success");
        this.getUsers();
        this.loading = false;
    })
  }
  getUsers(){
    this.userService.getUsers()
      .subscribe(users => {
        this.userList = users;
        console.log(users);
      this.loading = false;
      console.log(this.loading);
  })
  }
}
