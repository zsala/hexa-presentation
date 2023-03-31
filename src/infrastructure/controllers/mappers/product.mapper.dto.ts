import Product from "../../../domain/product";
import { CartProductDTO, ProductDTO } from "../dtos";

export default class ProductDTOMapper {
  toDomain(product: Product): ProductDTO {
    const productDTO: ProductDTO = new ProductDTO({
      id: product.id,
      name: product.name,
    });
    return productDTO
      .setTitle1(product.title1!)
      .setTitle2(product.title2!)
      .setTitle3(product.title3!)
      .setTitle4(product.title4!)
      .setDescription1(product.description1!)
      .setDescription2(product.description2!)
      .setDescription3(product.description3!)
      .setDescription4(product.description4!)
      .setPrice(product.price);
  }

  toDomains(products: Product[]): CartProductDTO[] {
    return products.map((product) => this.toDomain(product));
  }
}
