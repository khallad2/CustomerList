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

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  signIn() {
    this.loginService.login(this.credentials.email);
  }

}
