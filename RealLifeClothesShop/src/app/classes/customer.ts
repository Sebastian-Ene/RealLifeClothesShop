export class Customer {
  private firstName: string;
  private lastName: string;
  productList: [];
  total: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.productList = [];
    this.total = 0;
  }

  custGetter() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }
}
