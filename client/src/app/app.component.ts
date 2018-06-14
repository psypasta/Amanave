import { Component, OnInit, Output } from '@angular/core';
import {User} from './model/user';
import {UserService} from './service/user.service';
import {Product} from './model/product';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  users: User[] = null;
  loggedIn = false;

  max: User = {
    id: null,
    'name' : 'Robin Hood',
    'username' : 'HandsomRouge',
    'email' : 'Sherrif.sucks@gmail.com',
    'password' : 'password'
  };

  ngOnInit(){

  }
  constructor(
    private userService: UserService,
  ) { }

  loggEvent(loggedIn: boolean){
    this.loggedIn = loggedIn;
    console.log('Här är vi ' + loggedIn );
  }

  addUsers(){
    console.log(this.max);
    this.userService.addUser(this.max).subscribe(max => {
      console.log(max);
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

  deleteUser(){
   this.userService.deleteUsers(4).subscribe(user => {

   });
  }
}
