import { Product } from "../../../domain";
import { ProductModel } from "../models";

export default class ProductDbMapper {
  toDomain(dbProduct: ProductModel): Product {
    const product = new Product({
      id: dbProduct.id,
      name: dbProduct.name,
    });
    return product
      .setTitle1(dbProduct.title1!)
      .setTitle2(dbProduct.title2!)
      .setTitle3(dbProduct.title3!)
      .setTitle4(dbProduct.title4!)
      .setDescription1(dbProduct.description1!)
      .setDescription2(dbProduct.description2!)
      .setDescription3(dbProduct.description3!)
      .setDescription4(dbProduct.description4!)
      .setPrice(dbProduct.price);
  }

  toDomains(dbProducts: ProductModel[]): Product[] {
    return dbProducts.map((dbProduct) => this.toDomain(dbProduct));
  }
}
