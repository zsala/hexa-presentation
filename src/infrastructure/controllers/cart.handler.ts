import { Request, Response } from "express";
import { CartService } from "../../application";
import CartDTOMapper from "./mappers/cart.dto.mapper";

export default class CartController {
  cartService: CartService;
  cartDTOMapper: CartDTOMapper;

  constructor(cartService: CartService) {
    this.cartService = cartService;
    this.cartDTOMapper = new CartDTOMapper();
  }

  get(req: Request, res: Response): void {
    const cart = this.cartService.getById();
    if (cart) {
      // retrieve aggregate data

      const dto = this.cartDTOMapper.toDomain(cart);

      res.json(dto);
    } else {
      res.sendStatus(404);
    }
  }
}
