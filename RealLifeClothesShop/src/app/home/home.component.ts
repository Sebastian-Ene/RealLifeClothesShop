import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';
import { mockCust } from './mockCustomers';
import { mockJeans, mockTShirts, mockDresses } from './mockProducts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayCustomers = 'none';
  displayProducts = 'none';
  displayDresrooms = 'none';
  jeans = [];
  tShirts = [];
  dresses = [];
  selectedCustomer: number = null;
  selectedDressroom: number = null;
  dressrooms = [null, null, null, null];
  customers = [];
  customersQueue = [];
  custFName: string;
  custLName: string;
  constructor() { }

  ngOnInit(): void {
    this.getJeans();
    this.getDresses();
    this.getTShirts();
    console.log(this.jeans, this.dresses, this.tShirts);

  }

  displayToggle(toToggle) {
    (toToggle === 'none') ? toToggle = 'block' : toToggle = 'none';
    return toToggle;
  }

  anythingSelected(selectedCustomer) {
    // tslint:disable-next-line: triple-equals
    if (selectedCustomer == undefined || null) {
      alert('Select a customer first!');
      return 0;
    }
    else { return 1; }
  }

  getJeans() {
    for (let i = 0; i < 10; i++) {
      this.jeans.push(mockJeans[i]);
    }
  }

  getTShirts() {
    for (let i = 0; i < 10; i++) {
      this.tShirts.push(mockTShirts[i]);
    }
  }

  getDresses() {
    for (let i = 0; i < 10; i++) {
      this.dresses.push(mockDresses[i]);
    }
  }

  addCustomer(aCustFName, aCustLName) {
    this.displayCustomers = 'block';
    // tslint:disable-next-line: triple-equals
    if (aCustFName == undefined || '' || null) { alert('Please complete the First Name field'); }
    // tslint:disable-next-line: triple-equals
    else if (aCustLName == undefined || '' || null) { alert('Please complete the Last Name field'); }
    else {
      if (this.customers.length < 10) {
        this.customers.push(new Customer(
          aCustFName,
          aCustLName
        ));
      }

      else {
        this.customersQueue.push(new Customer(
          aCustFName,
          aCustLName
        ));
      }
    }
  }


  addPresetCust() {
    if (mockCust.length === 0) { alert('No more preset customers available!'); }
    else {
      this.addCustomer(mockCust[0][0], mockCust[0][1]);
      mockCust.splice(0, 1);
    }
  }

  selectCustomer(i: number) {

    this.selectedCustomer = i;
  }

  removeCustomer(j: number) {
    if (this.anythingSelected(j)) {
      for (let i = 1; i < 4; i++) {
        if (this.dressrooms[i] === this.customers[j]) {
          this.dressrooms[i] = null;
        }
      }
      this.customers.splice(j, 1);
      this.queueToShop();
      this.displayCustomers = 'block';
      this.selectedCustomer = null;
    }
  }

  queueToShop() {
    if (this.customers.length < 10 && this.customersQueue.length > 0) {
      const a = this.customersQueue.splice(0, 1);
      this.customers.push(a[0]);
    }
  }

  useDressroom(selectedCustomer: number) {
    if (this.anythingSelected(selectedCustomer)) {
      let isInDressroom1: number;
      let emptyDressroom: number;
      for (let i = 3; i > 0; i--) {
        if (this.dressrooms[i] === null) {
          emptyDressroom = i;
        }
        if (this.dressrooms[i] === this.customers[selectedCustomer]) {
          isInDressroom1 = 1;
        }
      }
      if (isInDressroom1) { alert('Customer is already in a dressroom'); }
      else {
        if (emptyDressroom === undefined) { alert('All dressrooms are full'); }
        else { this.dressrooms[emptyDressroom] = this.customers[selectedCustomer]; }
      }
    }
    this.displayDresrooms = 'block';
  }
  freeDressroom() {
    if (this.dressrooms[this.selectedDressroom] == null || undefined) { alert('Select a dressroom that is not empty!'); }
    this.dressrooms[this.selectedDressroom] = null;
  }
}
