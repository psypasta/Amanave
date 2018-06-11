import { Component, OnInit } from '@angular/core';
import {User} from "./model/user";
import {UserService} from "./service/user.service";
import {Product} from "./model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){

  }
  constructor(
    private userService: UserService,
  ) { }
  title = 'app';
  users: User[] = null;
  max: User = {
    id: null,
    "name" : "Robin Hood",
    "username" : "HandsomRouge",
    "email" : "Sherrif.sucks@gmail.com",
    "password" : "password"
  };
  addUsers(){
    console.log(this.max);
    this.userService.addUser(this.max).subscribe(max=>{
      console.log(max);
    })
  }
  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    })
  }
    deleteUser(){
     this.userService.deleteUsers(5).subscribe(user=>{

     })
    }
}
