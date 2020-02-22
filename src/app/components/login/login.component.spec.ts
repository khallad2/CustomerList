import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AppComponent} from '../../app.component';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {LoginService} from './login.service';
import {AppRoutingModule} from '../../app-routing.module';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {NotFountComponent} from '../not-found/not-fount.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, AppComponent, DashboardComponent, NotFountComponent ],
      imports: [FormsModule, MDBBootstrapModule.forRoot(), AppRoutingModule],
      providers: [LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
