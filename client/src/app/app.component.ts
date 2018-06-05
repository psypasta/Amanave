import { Component } from '@angular/core';
import {User} from "./model/user";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService,
              ) { }

  user: User = new User;
  title = 'app';

  newUser(){

    this.user.name = "Gurkan Burkan";
    this.user.email = "Gurkan.Burkan@junkmail.se";
    this.user.username = "Tim";
    this.user.password = "aaaaaaah";

    console.log(this.user);
    this.userService.addUser(this.user).subscribe(user=> {

    })





  }
}
