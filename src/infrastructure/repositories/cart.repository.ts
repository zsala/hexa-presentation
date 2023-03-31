import CartModel from "./models/cart-model";
import { CartDbMapper } from "./mappers";
import Cart from "../../domain/cart";
import fs from "fs";

export const folderPathCart = "./src/local-data/carts/";

export default class CartRepository {
  getById(): Cart | null {
    let data;
    try {
      const path = folderPathCart + "cart.json";
      data = fs.readFileSync(path, "utf8");
      const cartObj = JSON.parse(data);
      const cartModel: CartModel = new CartModel({ id: "1" });
      cartModel.products = cartObj.product_ids;

      const cartDbMapper = new CartDbMapper();
      return cartDbMapper.toDomain(cartModel);
    } catch (err) {
      return null;
    }
  }
}
