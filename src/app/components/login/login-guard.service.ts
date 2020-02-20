import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return this.loginService.isLoggedIn;
    // if (!this.loginService.isLoggedIn) {
    //   this.router.navigate(['/notFound']);
    // } else {
    //   return true;
    // }
    // // return this.loginService.isLoggedIn ? return this.loginService.isLoggedIn : ;
    // return true;
  }


}
