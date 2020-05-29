import { Component, OnInit } from '@angular/core';
import { Customers } from '../classes/customers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cust: [{}];
  custId: number;
  custFName: string;
  custLName: string;
  altu = new Customers(this.custId, this.custFName, this.custLName);
  constructor() {}
  showCust() {}
  ngOnInit(): void {}
  a() {
    this.custId = 1;
    this.custFName = 'Andrei';
    this.custLName = 'Ionescu';
    this.cust[0] = this.altu.custGetter();
    console.log(this.cust);
    this.custId = 2;
    this.custFName = 'aAndrei';
    this.custLName = 'aaIonescu';
    let unu = new Customers(this.custId, this.custFName, this.custLName);
    this.cust.push(unu.custGetter());
    console.log(this.cust);
  }
}
