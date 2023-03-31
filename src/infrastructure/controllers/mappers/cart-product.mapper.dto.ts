import Product from "../../../domain/product";
import { CartProductDTO } from "../dtos";

export default class CartProductDTOMapper {
  toDomain(product: Product): CartProductDTO {
    const cartProductDTO: CartProductDTO = new CartProductDTO({
      id: product.id,
      name: product.name,
    });
    cartProductDTO.setPrice(product.price);

    return cartProductDTO;
  }

  toDomains(products: Product[]): CartProductDTO[] {
    return products.map((product) => this.toDomain(product));
  }
}
