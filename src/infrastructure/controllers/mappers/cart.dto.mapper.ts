import Cart from "../../../domain/cart";
import { CartDTO, CartProductDTO } from "../dtos";
import CartProductDTOMapper from "./cart-product.mapper.dto";

export default class CartDTOMapper {
  cartProductDTOMapper: CartProductDTOMapper;

  constructor() {
    this.cartProductDTOMapper = new CartProductDTOMapper();
  }

  toDomain(cart: Cart): CartDTO {
    const cartProductDTO: CartProductDTO[] = this.cartProductDTOMapper.toDomains(cart.products);
    const cartDTO = new CartDTO();
    cartDTO.id = cart.id;
    cartDTO.setTotal(cart.total);
    cartDTO.setTotalWithDiscount(cart.totalWithDiscount);
    cartDTO.setProducts(cartProductDTO);

    return cartDTO;
  }
}
