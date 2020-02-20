import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {CustomerDetailsComponent} from './components/dashboard/customer-details/customer-details.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomerDetailsComponent,
    NotFountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomerDetailsComponent]
})
export class AppModule { }
