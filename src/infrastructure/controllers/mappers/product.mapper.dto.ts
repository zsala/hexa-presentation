import Product from "../../../domain/product";
import { IProductData } from "../../repositories/interfaces";
import { CartProductResponseDTO, ProductResponseDTO } from "../dtos";

export default class ProductDTOMapper {
  
  toDomain(product: Product): ProductResponseDTO {
    const productDTO: ProductResponseDTO = new ProductResponseDTO(product);

    return productDTO.setId(product.id);
  }

  toDomains(products: Product[]): CartProductResponseDTO[] {
    return products.map((product) => this.toDomain(product));
  }
}
