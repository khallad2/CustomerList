import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.sass']
})
export class CustomerDetailsComponent implements OnInit {
  firstName: string;
  lastName: string;
  role: string;
  country: string;
  education: string;
  age: number;
  maritalStatus: string;
  // action: Subject&lt; any&gt; = new Subject();
  constructor(private modalRef: MDBModalRef) {
    // this.heading = modalRef.content.heading;
    // this.content = modalRef.content.content;
  }

  ngOnInit() {
    // console.log('heading', this.heading);
    // console.log('content', this.content);

  }


}
