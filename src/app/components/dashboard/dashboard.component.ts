import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild('row', { static: true }) row: ElementRef;
  elements: any = [{id: 'jhwegf7w6efgyw', first: 'Khallad', last: 'Sharafeldin', role: 'Sw Engineer'}];
  headElements = ['id', 'first', 'last', 'role'];

  searchText = '';
  previous: string;

  maxVisibleItems = 8;
  constructor() { }

  ngOnInit() {
  }

  onRowCreate(event) {

  }

  onRowRemove(event) {

  }

  searchItems() {

  }

}
