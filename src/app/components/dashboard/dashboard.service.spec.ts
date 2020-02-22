import { TestBed } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';
import * as customerList from '../../fake-data/customersData.json';
import {of} from 'rxjs';

describe('DashboardService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({})
      .compileComponents()
      .then(() => {
        const myService = TestBed.get(DashboardService);
        spyOn(myService, 'getCustomerList').and.returnValue(customerList['default']);
      })
  );

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service.getCustomerList().toPromise()).toBe(of(customerList['default']));
  });

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });
});
