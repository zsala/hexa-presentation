import {
  ProductRepository,
  VoucherRepository,
} from "../infrastructure/repositories";
import { folderPathProducts } from "../infrastructure/repositories/product.repository";
import VoucherCalculatorService from "../domain/services/voucher.calculator.service";
import { Product } from "../domain";

export default class ProductService {
  voucherRepository: VoucherRepository;
  productRepository: ProductRepository;
  voucherCalculatorService: VoucherCalculatorService;

  constructor(
    voucherRepository: VoucherRepository,
    productRepository: ProductRepository
  ) {
    this.voucherRepository = voucherRepository;
    this.productRepository = productRepository;
    this.voucherCalculatorService = new VoucherCalculatorService();
  }

  upsert(data: Product): void {
    this.productRepository.upsert(data);
  }

  getById(id: string): Product | null {
    const voucher = this.voucherRepository.getById("10");

    // retrieve data
    const path = folderPathProducts + (id as string)!.toLowerCase() + ".json";
    let product = this.productRepository.getById(path);

    // apply discount
    product = this.voucherCalculatorService.applyDiscountToProduct(
      product!,
      voucher!
    );

    return product;
  }

  getAll(ids: string[]): (Product | null)[] {
    const voucher = this.voucherRepository.getById("10");

    const result = ids.map((id: string) => {
      const path = folderPathProducts + id;
      let product = this.productRepository.getById(path);

      // apply discount
      product = this.voucherCalculatorService.applyDiscountToProduct(
        product!,
        voucher!
      );
      return product;
    });
    return result;
  }
}
