import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { ProductService } from "../../application";
import { Product } from "../../domain";
import ProductDTOMapper from "./mappers/product.mapper.dto";

@Service()
export default class ProductController {
  productDTOMapper: ProductDTOMapper;

  constructor(@Inject() private productService: ProductService) {
    this.productDTOMapper = new ProductDTOMapper();
  }

  get(req: Request, res: Response): void {
    // mapping
    const { id } = req.query;

    // retrieve all products
    if (!id) {
      const products = this.productService.getAll();
      res.json(this.productDTOMapper.toDomains(products));
    } else {
      // retrieve a single product
      const product = this.productService.getById(id as string);

      if (product) {
        res.json(this.productDTOMapper.toDomain(product));
      } else {
        res.sendStatus(404);
      }
    }
  }

  post(req: Request, res: Response): void {
    // mapping
    const {
      id,
      name,
      title1,
      title2,
      title3,
      title4,
      description1,
      description2,
      description3,
      description4,
      price,
    } = req.body;

    // upsert product data
    this.productService.upsert({
      id,
      name,
      title1,
      title2,
      title3,
      title4,
      description1,
      description2,
      description3,
      description4,
      price,
    } as Product);

    // return correct status code
    res.sendStatus(200);
  }
}
