import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  loading = true;
  user: User;

  errorMessage: string;

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => {
        console.log(users + 'hello');
        this.users = users;
      },
      error => {
        this.errorMessage = <any>error;
      },
      () => {
        if (this.users.length !== 0) {
          this.user = this.users[0];

          this.loading = false;
        }
      }
    );
  }

  constructor(
    private userService: UserService,
  ) {
  }
  onSelect(user: User): void {
    this.user = user;
    console.log('here');
    console.log(user);
    console.log(this.user);
    this.user = user;
    console.log(this.user);
  }
  getUser() {
    this.userService.getUser(1).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }
  createUser() {
    this.userService.addUser(this.user).subscribe();
  }
  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.user);
    });
  }
  updateUser() {
    this.userService.updateUser(this.user, this.user.id).subscribe();
  }
  deleteUser(id: number) {
    this.userService.deleteUsers(id).subscribe(data => {

      },
      error => {
      },
      () => {
        this.getUsers();
      });
  }

}
