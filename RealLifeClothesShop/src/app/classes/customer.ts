export class Customer {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  custSetter(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  custGetter() {
    return [this.firstName, this.lastName];
  }
}
