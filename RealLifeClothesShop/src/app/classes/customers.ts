export class Customers {
  private id: number;
  firstName: string;
  lastName: string;
  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  custSetter(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  custGetter() {
    return [this.id, this.firstName, this.lastName];
  }
}
