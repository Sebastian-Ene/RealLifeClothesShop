import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayCustomers = 'none';
  selectedCustomer: Array<string>;
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
}
