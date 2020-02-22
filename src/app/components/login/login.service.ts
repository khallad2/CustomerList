import { Injectable } from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import * as loginData from '../../fake-data/loginData.json';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  isLoggedIn: boolean;
  loginError: BehaviorSubject<{hasError: boolean, error: string}> =
    new BehaviorSubject<{hasError: boolean, error: string}>({hasError: false, error: ''});

  constructor(private router: Router) {
    this.isLoggedIn = false;
  }

  getUserByEmail(credentials: {email: string, password: string}) {
    const data: [] = loginData['default'];
    if (data.length === 0) { // if incoming Data is empty
      return this.loginError.next({ hasError: true, error: 'No Users retrieved'});
    } else { // incoming Data has at least 1 Object
      return data.map((item: IUser) =>  (item.email === credentials.email && item.password === credentials.password) ? item : null );
    }
  }

  login(credentials: {email: string, password: string}) {
    const user = this.getUserByEmail(credentials);
    if (user[0] !== null) {
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } else {
      console.log('user is not exist', user);
      this.loginError.next({ hasError: true, error: 'User Not Found'});
    }

  }

}
