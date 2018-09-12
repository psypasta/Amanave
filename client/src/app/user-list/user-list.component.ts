import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import {Product} from '../model/product';
import { Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CreateUserComponent} from '../create-user/create-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  loading = true;
  user: User = {
    username: 'robin',
    name: 'Robin van Manen',
    email: 'robin@robin.se',
    password: 'asd',
    id: 123
  };
  constructor(
    private userService: UserService, private router: Router, public dialog: MatDialog
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
  createUser(){
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(newUser => {
      this.getUsers();
    });
  }
  editUser() {
    this.router.navigate(['./products']);
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
  getTimeLoaded() {
  }

}
