import { Component, OnInit } from '@angular/core';
import { Products } from '../classes/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {
  choseColor: string;
  chosePrice: number;
  assign(cuvant: string) {
    this.choseColor = cuvant;
  }
  constructor() {}

  ngOnInit(): void {}
}
