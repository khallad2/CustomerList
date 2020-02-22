import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import * as constants from '../../constants';
import {ICustomer} from '../../interfaces/ICustomer';
import {DashboardService} from './dashboard.service';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;
  private modalRef: MDBModalRef = new MDBModalRef();
  private modalOptions = {
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
  public elements: ICustomer[];
  public headElements;
  public sortedColumn: string;
  public originalElements: ICustomer[];
  public viewMoreTooltip: string;
  public sortedColTooltip: string;
  public clickToSortTooltip: string;
  public retrieveOrigBtnTooltip: string;
  public subscription: Subscription;

  constructor(private dashboardService: DashboardService, private modalService: MDBModalService) {
    this.elements = [];
    this.originalElements = [];
    this.headElements = constants.headElements;
    this.viewMoreTooltip = constants.viewMoreTooltip;
    this.sortedColTooltip = constants.sortedColTooltip;
    this.clickToSortTooltip = constants.clickToSortTooltip;
    this.retrieveOrigBtnTooltip = constants.retrieveOrigBtnTooltip;
    this.sortedColumn = '';
  }

  ngOnInit() {
    this.getCustomerData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Subscribe to get All Data
   */
  getCustomerData() {
    try {
      this.subscription = this.dashboardService.getCustomerList().subscribe(
        res => this.elements = res,
        err => console.log(err),
        () => Object.assign(this.originalElements, this.elements)
      );
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Open Modal component and attach data
   * param userData
   */
  openModal(userData: ICustomer) {
    this.modalOptions.data = userData;
    this.modalRef = this.modalService.show(CustomerDetailsComponent, this.modalOptions);
  }

  /**
   * Sort by incoming column name
   * param head
   */
  sort(attrName: string) {
    // handle difference between rendered column name and actual attribute name
    this.sortedColumn = attrName;
    attrName = attrName.toLowerCase();
    attrName = (attrName === 'first name') ? 'firstName' : attrName;
    attrName = (attrName === 'last name') ? 'lastName' : attrName;
    this.elements.sort( (a, b) => (a[attrName] < b[attrName]) ? -1 : 1 );
  }

  /**
   * Revert table to the first state
   */
  revertToOriginalData() {
    Object.assign(this.elements, this.originalElements);
    this.sortedColumn = '';
  }
}
