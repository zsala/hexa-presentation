import {
  ProductRepository,
  VoucherRepository,
} from "../infrastructure/repositories";
import { folderPathProducts } from "../infrastructure/repositories/product.repository";
import VoucherCalculatorService from "../domain/services/voucher.calculator.service";
import { Product } from "../domain";
import { Inject, Service } from "typedi";

@Service()
export default class ProductService {
  voucherCalculatorService: VoucherCalculatorService;

  constructor(
    @Inject() private voucherRepository: VoucherRepository,
    @Inject() private productRepository: ProductRepository
  ) {
    this.voucherCalculatorService = new VoucherCalculatorService();
  }

  upsert(data: Product): void {
    this.productRepository.upsert(data);
  }

  getById(id: string): Product {
    const voucher = this.voucherRepository.getById("10");
    const path = folderPathProducts + (id as string)!.toLowerCase() + ".json";
    
    let product = this.productRepository.getById(path);

    // apply discount
    product = this.voucherCalculatorService.applyDiscountToProduct(
      product!,
      voucher!
    );

    return product;
  }

  getAll(): Product[] {
    const voucher = this.voucherRepository.getById("10");
    const products = this.productRepository.getAll();

    if (voucher) {
      return products.map((product: Product) => {
        return this.voucherCalculatorService.applyDiscountToProduct(
          product,
          voucher!
        );
      });
    }

    return products;
  }
}
