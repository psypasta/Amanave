import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../service/user.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../model/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    console.log(this.user.username);
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User) {
  }
  cancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    console.log('Do I even exist?');
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('Are you sure?');
      return;
    }

    alert('SUCCESS!! :-)');
    console.log(this.user);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    this.userService.updateUser(this.user, this.user.id).subscribe(
      user => {
        console.log(user);
      },
      error => {
        this.toastr.error('User could not be updated', 'error');
      },
      () => {
        this.toastr.success(this.user.username + ' has been updated', 'User Updated');
        console.log('success');
        this.dialogRef.close();
      }
    );

  }
  get f() { return this.registerForm.controls; }

  onNoClick(): void {
    console.log(this.user);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.userService.addUser(this.user).subscribe(
      user => {
        console.log(user);
      },
      error => {
        this.toastr.error('User could not be created', 'error');
      },
      () => {
        this.toastr.success(this.user.username + ' has been created', 'User Created');
        console.log('success');
        this.dialogRef.close();
      }
    );

  }
}
