import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

  constructor(private userService: UserService, private router: Router) { }

  model = new User();

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
      // console.log(this.loginCred);
      console.log(this.model);
      this.userService.addUser(this.model).subscribe(model => {});
    this.router.navigate(['./login']);
  }
}
