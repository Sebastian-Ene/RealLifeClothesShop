import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { mockCust } from './mockCustomers';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayCustomers = 'none';
  selectedCustomer: number;
  customers = [];
  customersQueue = [];
  custId: number;
  custFName: string;
  custLName: string;
  constructor() { }

  ngOnInit(): void { }
  addCustomer(aCustId, aCustFName, aCustLName) {
    this.displayCustomers = 'block';
    if (this.customers.length < 10) {
      this.customers.push(new Customer(
        aCustId,
        aCustFName,
        aCustLName
      ));
      console.log('Added Customer');
    }
    else {
      this.customersQueue.push(new Customer(
        aCustId,
        aCustFName,
        aCustLName
      ));
      console.log('Added Customer to Queue');
    }
  }
  addPresetCust() {
    if (mockCust.length === 0) { alert('No more preset customers available!'); }
    else {
      this.addCustomer(1, mockCust[0][0], mockCust[0][1]);
      mockCust.splice(0, 1);
    }
  }
  selectCustomer(i: number) {

    this.selectedCustomer = i;
  }
  removeCustomer(i: number) {
    this.customers.splice(i, 1);
    this.selectedCustomer = null;
    console.log('Removed Customer');
    this.queueToShop();
  }
  queueToShop() {
    if (this.customers.length < 10 && this.customersQueue.length > 0) {
      const a = this.customersQueue.splice(0, 1);
      this.customers.push(a[0]);
    }
  }
}

