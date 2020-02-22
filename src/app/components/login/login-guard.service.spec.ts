import { TestBed } from '@angular/core/testing';

import { LoginGuardService } from './login-guard.service';
import {CustomerDetailsComponent} from '../dashboard/customer-details/customer-details.component';
import {LoginComponent} from './login.component';
import {AppComponent} from '../../app.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {NotFountComponent} from '../not-found/not-fount.component';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule, MDBModalService} from 'angular-bootstrap-md';
import {AppRoutingModule} from '../../app-routing.module';
import {LoginService} from './login.service';

describe('LoginGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ CustomerDetailsComponent, LoginComponent, AppComponent, DashboardComponent, NotFountComponent ],
    imports: [FormsModule, MDBBootstrapModule.forRoot(), AppRoutingModule],
    providers: [LoginService, MDBModalService]
  }));

  it('should be created', () => {
    const service: LoginGuardService = TestBed.get(LoginGuardService);
    expect(service).toBeTruthy();
  });
});
