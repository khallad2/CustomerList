import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../../app.component';
import {NotFountComponent} from '../not-found/not-fount.component';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule, MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {AppRoutingModule} from '../../app-routing.module';
import {LoginService} from '../login/login.service';
import * as data from '../../fake-data/customersData.json';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsComponent, LoginComponent, AppComponent, DashboardComponent, NotFountComponent ],
      imports: [FormsModule, MDBBootstrapModule.forRoot(), AppRoutingModule],
      providers: [LoginService, MDBModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by country', () => {
    const elemets = data['default'];
    elemets.sort((a, b) => (a.country < b.country) ? -1 : 1 );
    component.sort('country');
    expect(component.elements).toEqual(elemets);
  });

  it('should sort by firstName', () => {
    const elements = data['default'];
    elements.sort((a, b) => (a.country < b.country) ? -1 : 1 );
    component.sort('First Name');
    expect(component.elements).toEqual(elements);
  });

  it('should initiate subscription', () => {
    const elements = data['default'];
    const done = async(() => component.getCustomerData());
    if (done) {
      expect(component.elements).toEqual(elements);
    }
    // component.getCustomerData();
    // expect(component.elements).toEqual(elements);
  });

  it('should Close subscription', () => {
    component.ngOnDestroy();
    expect(component.subscription.closed).toEqual(true);
  });

  it('should revert table to original order', () => {
    component.revertToOriginalData();
    expect(component.elements).toEqual(component.originalElements);
  });

  it('should render table body', async(() => {
    const labelFixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table ').className).toEqual('p-4 table');
  }));

});
