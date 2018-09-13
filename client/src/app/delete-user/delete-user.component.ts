import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../service/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../model/user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  deletedUser;
  ngOnInit() {
    console.log(this.user.username);
    this.deletedUser = this.user;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User) {
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.userService.deleteUsers(this.user.id).subscribe(
      user => {
        console.log(user);
      },
      error => {
        this.toastr.error('User could not be deleted', 'error');
      },
      () => {
        this.toastr.success(this.deletedUser.username + ' has been deleted', 'User Deleted');
        console.log('success');
        this.dialogRef.close();
      }
    );
  }
}
