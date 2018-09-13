import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {User} from '../model/user';
import {UserService} from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public newUser: User) {
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
    console.log(this.newUser);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    this.userService.addUser(this.newUser).subscribe(
      user => {
        console.log(user);
      },
      error => {
        this.toastr.error('User could not be created', 'error');
      },
      () => {
        this.toastr.success(this.newUser.username + ' has been created', 'User Created');
        console.log('success');
        this.dialogRef.close();
      }
    );

  }
  get f() { return this.registerForm.controls; }
  cancel() {
    this.dialogRef.close();
  }
  onNoClick(): void {
    console.log(this.newUser);
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
    this.userService.addUser(this.newUser).subscribe(
      user => {
        console.log(user);
      },
      error => {
        this.toastr.error('User could not be created', 'error');
      },
      () => {
        this.toastr.success(this.newUser.username + ' has been created', 'User Created');
        console.log('success');
        this.dialogRef.close();
      }
    );

  }
}
