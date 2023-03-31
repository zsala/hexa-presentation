import { IProductData } from "../../../domain/interfaces";

export default class ProductDTO {
  id: string = '';
  name: string = '';
  price: number = 0;

  title1: string;
  title2: string;
  title3: string;
  title4: string;

  description1: string;
  description2: string;
  description3: string;
  description4: string;

  constructor(productData: IProductData) {
    this.id = productData.id;
    this.name = productData.name;
    this.title1 = '';
    this.title2 = '';
    this.title3 = '';
    this.title4 = '';
    this.description1 = '';
    this.description2 = '';
    this.description3 = '';
    this.description4 = '';
    this.price = 0;
  }

  setTitle1(title1: string): this {
    this.title1 = title1;
    return this;
  }

  setTitle2(title2: string): this {
    this.title2 = title2;
    return this;
  }

  setTitle3(title3: string): this {
    this.title3 = title3;
    return this;
  }

  setTitle4(title4: string): this {
    this.title4 = title4;
    return this;
  }

  setDescription1(description1: string): this {
    this.description1 = description1;
    return this;
  }

  setDescription2(description2: string): this {
    this.description2 = description2;
    return this;
  }

  setDescription3(description3: string): this {
    this.description3 = description3;
    return this;
  }

  setDescription4(description4: string): this {
    this.description4 = description4;
    return this;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }
}
