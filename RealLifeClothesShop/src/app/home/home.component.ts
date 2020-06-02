import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayCustomers = 'none';
  selectedCustomer: number;
  customers = [];
  custId: number;
  custFName: string;
  custLName: string;
  constructor() { }

  ngOnInit(): void { }
  addCustomer() {
    this.displayCustomers = 'block';
    this.customers.push(new Customer(
      this.custId,
      this.custFName,
      this.custLName
    ));
    console.log('Added Customer');
  }
  selectCustomer(i: number) {

    this.selectedCustomer = i;
  }
  removeCustomer(i: number) {
    this.customers.splice(i, 1);
    this.selectedCustomer = null;
    console.log('Removed Customer');
  }
}

