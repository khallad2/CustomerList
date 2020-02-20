import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginGuardService} from './components/login/login-guard.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NotFountComponent} from './components/not-fount/not-fount.component';


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
    path: '**',
    redirectTo: '/notFound'
  },
  {
    path: 'notFound',
    component: NotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
