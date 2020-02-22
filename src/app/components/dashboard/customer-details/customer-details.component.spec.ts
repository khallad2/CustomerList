import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsComponent } from './customer-details.component';
import {LoginComponent} from '../../login/login.component';
import {AppComponent} from '../../../app.component';
import {DashboardComponent} from '../dashboard.component';
import {NotFountComponent} from '../../not-found/not-fount.component';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule, MDBModalRef} from 'angular-bootstrap-md';
import {AppRoutingModule} from '../../../app-routing.module';
import {LoginService} from '../../login/login.service';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsComponent, LoginComponent, AppComponent, DashboardComponent, NotFountComponent ],
      imports: [FormsModule, MDBBootstrapModule.forRoot(), AppRoutingModule],
      providers: [LoginService, MDBModalRef]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
