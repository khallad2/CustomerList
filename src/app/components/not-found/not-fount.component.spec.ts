import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFountComponent } from './not-fount.component';
import {CustomerDetailsComponent} from '../dashboard/customer-details/customer-details.component';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../../app.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule, MDBModalService} from 'angular-bootstrap-md';
import {AppRoutingModule} from '../../app-routing.module';
import {LoginService} from '../login/login.service';

describe('NotFountComponent', () => {
  let component: NotFountComponent;
  let fixture: ComponentFixture<NotFountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsComponent, LoginComponent, AppComponent, DashboardComponent, NotFountComponent ],
      imports: [FormsModule, MDBBootstrapModule.forRoot(), AppRoutingModule],
      providers: [LoginService, MDBModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFountComponent);
    component = fixture.componentInstance;
    document.getElementById('svgImage').style.display = 'none'; // disable view images in unit testing
    document.getElementById('svgImageBg').style.display = 'none'; // disable view images in unit testing
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
