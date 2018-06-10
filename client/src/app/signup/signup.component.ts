import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import { User }    from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

	constructor(private userService: UserService) { }

	model = new User('psy', 'Robin', 'robin@gmail.com', 'psypsy');

	submitted = false;

	onSubmit() { this.submitted = true; }

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }

	newUser(){
	    console.log(this.loginCred);
	    console.log(this.user);
	    this.userService.addUser(this.model).subscribe(user=> {

	    })


 	}
}