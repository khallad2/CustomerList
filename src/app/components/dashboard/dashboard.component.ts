import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {IUser} from '../../interfaces/IUser';
import {ICustomer} from '../../interfaces/ICustomer';
import {DashboardService} from './dashboard.service';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;

  elements: ICustomer[];
  headElements;
  searchText = '';
  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    data: {}
  };

  previous: string;
  maxVisibleItems = 8;
  private modalRef: MDBModalRef = new MDBModalRef();
  constructor(private dashboardService: DashboardService, private modalService: MDBModalService) {
    this.elements = [];
    this.headElements = ['first', 'last', 'role', 'country'];
  }

  ngOnInit() {
    this.getCustomerData();
  }

  getCustomerData() {
    try {
      this.dashboardService.getCustomerList().subscribe(
        res => {this.elements = res; console.log('res2222', res); },
        err => console.log(err),
        () => console.log('done')
      );
    } catch (e) {
      console.log(e);
    }
  }

  openModal(userData: ICustomer) {
    this.modalOptions.data = userData;
    this.modalRef = this.modalService.show(CustomerDetailsComponent,  this.modalOptions );
  }

  onRowCreate(event) {

  }

  onRowRemove(event) {

  }

  searchItems() {

  }

}
