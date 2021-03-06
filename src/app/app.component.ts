import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[] = [];
  userForm: boolean = false;
  isNewUser: boolean = false;
  newUser: any = {};
  editUserForm: boolean = false;
  editedUser: any = {};
  title: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersData();
  }

  AddUserDataForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUserData(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUserData(user);
    }
    this.userForm = false;
  }


  removeUserData(user: User) {
    this.userService.deleteUserData(user);
  }



}
