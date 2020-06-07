class Products {
  private color: string;
  private price: number;
  private uid: string;

  constructor(uid: string, price: number, color: string) {
    this.uid = uid;
    this.color = color;
    this.price = price;
  }

  productsGetter() {
    return {
      uid: this.uid,
      price: this.price,
      color: this.color,
    };
  }
}


class Jeans extends Products {
  private size: number;
  private numberOfPockets: number;

  constructor(uid: string, price: number, color: string, size: number, numberOfPockets: number) {
    super(uid, price, color);
    this.size = size;
    this.numberOfPockets = numberOfPockets;
  }

  jeansGetter() {
    return {
      uid: this.productsGetter().uid,
      price: this.productsGetter().price,
      color: this.productsGetter().color,
      size: this.size,
      numberOfPockets: this.numberOfPockets,
    };
  }
}


class TShirts extends Products {
  private size: string;
  private material: string;

  constructor(uid: string, price: number, color: string, size: string, material: string) {
    super(uid, price, color);
    this.size = size;
    this.material = material;
  }

  TShirtsGetter() {
    return {
      uid: this.productsGetter().uid,
      price: this.productsGetter().price,
      color: this.productsGetter().color,
      size: this.size,
      material: this.material,
    };
  }
}


class Dresses extends Products {
  private size: string;
  private length: string;

  constructor(uid: string, price: number, color: string, size: string, length: string) {
    super(uid, price, color);
    this.size = size;
    this.length = length;
  }

  DressesGetter() {
    return {
      uid: this.productsGetter().uid,
      price: this.productsGetter().price,
      color: this.productsGetter().color,
      size: this.size,
      length: this.length,
    };
  }
}
