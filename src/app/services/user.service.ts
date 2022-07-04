import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Ricky',
      lastName: 'Bobby',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
    },
  ];

  constructor() {}

  getUsersData(): User[] {
    return this.upersons;
  }

  addUserData(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);
  }

  deleteUserData(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }
}
