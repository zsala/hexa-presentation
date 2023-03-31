import { IProductData } from "../../../domain/interfaces";

export default class CartProductDTO {
  id: string = '';
  name: string = '';
  price: number = 0;

  constructor(productData: IProductData) {
    this.id = productData.id;
    this.name = productData.name;
    this.price = 0;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }
}
