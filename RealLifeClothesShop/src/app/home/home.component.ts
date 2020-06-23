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
  displayProductList = 'none';
  displayJeans = 'none';
  displayDresses = 'none';
  displayTShirts = 'none';
  jeans = [];
  tShirts = [];
  dresses = [];
  selectedCustomer: number = null;
  selectedDressroom: number = null;
  selectedProduct = { position: -1, article: '' };
  dressrooms = [null, null, null];
  customers = [];
  customersQueue = [];
  custFName: string;
  custLName: string;
  constructor() { }

  ngOnInit(): void {
    this.getJeans();
    this.getDresses();
    this.getTShirts();
  }

  displayToggle(toToggle) {
    (toToggle === 'none') ? toToggle = 'block' : toToggle = 'none';
    return toToggle;
  }

  anythingSelected(selectedCustomer) {
    // tslint:disable-next-line: triple-equals
    if (selectedCustomer == undefined || null) {
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

  addCustomer(CustFName, CustLName) {
    // tslint:disable-next-line: triple-equals
    if (CustFName == undefined || '' || null) { alert('Please complete the First Name field'); }
    // tslint:disable-next-line: triple-equals
    else if (CustLName == undefined || '' || null) { alert('Please complete the Last Name field'); }
    else {
      if (this.customers.length < 10) {
        this.customers.push(new Customer(
          CustFName,
          CustLName
        ));
      }

      else {
        this.customersQueue.push(new Customer(
          CustFName,
          CustLName
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

  selectCustomer(selected: number) {
    this.selectedCustomer = selected;
  }

  removeCustomer(selected: number) {
    if (this.anythingSelected(selected)) {
      for (let i = 0; i < 3; i++) {
        if (this.dressrooms[i] === this.customers[selected]) { this.dressrooms[i] = null; }
      }
      this.customers.splice(selected, 1);
      this.selectedCustomer = null;
    }
    else { alert('Select a customer first!'); }
  }

  queueToShop() {
    if (this.customers.length < 10 && this.customersQueue.length > 0) {
      const a = this.customersQueue.splice(0, 1);
      this.customers.push(a[0]);
    }
  }

  useDressroom(selected: number) {
    if (this.anythingSelected(selected)) {
      if (this.customers[selected].productList.length > 0 && this.customers[selected].productList.length < 4) {
        let isInDressroom1: number;
        let emptyDressroom: number;
        for (let i = 2; i >= 0; i--) {
          if (this.dressrooms[i] === null) {
            emptyDressroom = i;
          }
          if (this.dressrooms[i] === this.customers[selected]) {
            isInDressroom1 = 1;
          }
        }
        if (isInDressroom1) { alert('Customer is already in a dressroom'); }
        else {
          if (emptyDressroom === undefined) { alert('All dressrooms are full'); }
          else { this.dressrooms[emptyDressroom] = this.customers[selected]; }
        }
      }
      else if (this.customers[selected].productList.length === 0) { alert('Customer has no products to try on!'); }
      else { alert('Customers has more than 3 products !'); }
    }
    else { alert('Select a customer first!'); }
  }
  freeDressroom() {
    if (this.dressrooms[this.selectedDressroom] == null || undefined) { alert('Select a dressroom that is not empty!'); }
    this.dressrooms[this.selectedDressroom] = null;
  }
  pickProduct() {
    if (this.anythingSelected(this.selectedCustomer)) {
      if (this.selectedProduct.position === -1) { alert('Please select a product!'); }
      else if (this.selectedProduct.article === 'dresses') {
        this.customers[this.selectedCustomer].productList.push(this.dresses.splice(this.selectedProduct.position, 1)[0]);
      }
      else if (this.selectedProduct.article === 'jeans') {
        this.customers[this.selectedCustomer].productList.push(this.jeans.splice(this.selectedProduct.position, 1)[0]);
      }
      else if (this.selectedProduct.article === 'tShirts') {
        this.customers[this.selectedCustomer].productList.push(this.tShirts.splice(this.selectedProduct.position, 1)[0]);
      }
      this.selectedProduct = { position: -1, article: '' };
    }
    else { alert('Select a customer first!'); }
  }
  calcTotal() {
    let i = 0;
    let x = 0;
    while (i < this.customers[this.selectedCustomer].productList.length) {
      x += this.customers[this.selectedCustomer].productList[i].price;
      i++;
    }
    this.customers[this.selectedCustomer].total = x;
  }
}
