import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  loading = true;
  users: User[];

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
        this.users = users;
      },
      error => {
      },
      () => {
        this.loading = false;
      });
  }

  editUser() {
    console.log('This function, it does nothing');
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
