import { ProductModel } from "../infrastructure/repositories/models";
import {
  VoucherRepository,
  ProductRepository,
  CartRepository,
} from "../infrastructure/repositories";
import { folderPathProducts } from "../infrastructure/repositories/product.repository";
import { Cart, Product } from "../domain";
import VoucherCalculatorService from "../domain/services/voucher.calculator.service";

export default class CartService {
  voucherRepository: VoucherRepository;
  productRepository: ProductRepository;
  cartRepository: CartRepository;
  voucherCalculatorService: VoucherCalculatorService;

  constructor(
    voucherRepository: VoucherRepository,
    productRepository: ProductRepository,
    cartRepository: CartRepository
  ) {
    this.voucherRepository = voucherRepository;
    this.productRepository = productRepository;
    this.cartRepository = cartRepository;
    this.voucherCalculatorService = new VoucherCalculatorService();
  }

  getById(): Cart | null {
    const cart = this.cartRepository.getById();
    const voucher = this.voucherRepository.getById("10");

    if (!cart) {
      return null;
    }

    // get all products
    const products = cart.productIds.map((productId: string) => {
      const path = folderPathProducts + productId + ".json";
      return this.productRepository.getById(path);
    });

    cart.products = products as Product[];
    cart.calculate();

    return this.voucherCalculatorService.applyDiscountToCart(cart, voucher!);
  }
}
