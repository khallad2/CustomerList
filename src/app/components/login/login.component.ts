import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public credentials = {
    email: '',
    password: ''
  };

  public loginError: {hasError: boolean, error: string};

  constructor(private loginService: LoginService) {
    this.loginError = {
      hasError: false,
      error: ''
    };
  }

  ngOnInit() {}

  signIn() {
    this.loginService.login(this.credentials);
    this.loginService.loginError.subscribe(
      res => this.loginError = res
    );
  }

}
