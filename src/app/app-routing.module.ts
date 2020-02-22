import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginGuardService} from './components/login/login-guard.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NotFountComponent} from './components/not-found/not-fount.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'notFound',
    component: NotFountComponent
  },
  {
    path: '**',
    redirectTo: '/notFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
