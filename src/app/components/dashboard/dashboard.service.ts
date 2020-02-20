import { Injectable } from '@angular/core';
import * as customerList from '../../customersData.json';
import {Observable, of} from 'rxjs';
import {ICustomer} from '../../interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getCustomerList(): Observable<ICustomer[]> {
    console.log('customerList', customerList);
    return of(customerList['default']);
  }
}
