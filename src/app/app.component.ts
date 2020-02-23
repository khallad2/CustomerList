import { Component } from '@angular/core';
import {LoginService} from './components/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CustomerList';
  constructor(private loginService: LoginService, private router: Router) {
    if (!this.loginService.isLoggedIn) {
      this.router.navigate(['']);
    }
  }

  logout() {
    this.loginService.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
