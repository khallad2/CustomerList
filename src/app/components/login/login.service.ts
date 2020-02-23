import { Injectable } from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import * as loginData from '../../fake-data/loginData.json';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {strictEqual} from 'assert';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  isLoggedIn: boolean;
  loggedInUser: IUser;
  loginError: BehaviorSubject<{hasError: boolean, error: string}> =
    new BehaviorSubject<{hasError: boolean, error: string}>({hasError: false, error: ''});
  constructor(private router: Router) {}

  getUserByEmail(credentials: {userName: string, password: string}) {
    const data: [] = loginData['default'];
    const user: IUser = {email: '', password: '', status: false, id: '', name: '', userName: ''};
    if (data.length === 0) { // if incoming Data is empty
       this.loginError.next( { hasError: true, error: 'No Users retrieved'});
       return user;
    } else { // incoming Data has at least 1 Object
      const x =  data.filter((item: IUser) =>
        (item.userName === credentials.userName && item.password === credentials.password));
      return (x.length > 0) ? x[0] : user;
    }
  }

  /**
   * Loi
   * param credentials
   */
  login(credentials: {userName: string, password: string}): boolean {
    const user: IUser  = this.getUserByEmail(credentials);

    if (credentials.userName === '') {
      this.loginError.next( { hasError: true, error: 'User Name is required'});
      return false;
    }

    if (credentials.password === '') {
      this.loginError.next( { hasError: true, error: 'Password is required'});
      return false;
    }

    if (user.userName === credentials.userName && user.password === credentials.password) {
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
      this.loggedInUser = user;
      return true;
    } else {
      this.isLoggedIn = false;
      this.loginError.next( { hasError: true, error: 'Wrong Login Credentials'});
      return false;
    }
  }

}
