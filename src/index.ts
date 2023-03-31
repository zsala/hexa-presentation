import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  CartRepository,
  ProductRepository,
  VoucherRepository,
} from "./infrastructure/repositories";
import CartController from "./infrastructure/controllers/cart.handler";
import ProductController from "./infrastructure/controllers/product.handler";
import { CartService, ProductService } from "./application";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// routes and controller initialization
const productRepository = new ProductRepository();
const voucherRepository = new VoucherRepository();
const cartRepository = new CartRepository();

const cartService = new CartService(
  voucherRepository,
  productRepository,
  cartRepository
);

const productService = new ProductService(voucherRepository, productRepository);

const productController = new ProductController(productService);
const cartController = new CartController(cartService);

app.get("/products", (req: Request, res: Response) => {
  productController.get(req, res);
});
app.post("/products", (req: Request, res: Response) => {
  productController.post(req, res);
});
app.get("/carts", (req: Request, res: Response) => {
  cartController.get(req, res);
});

// start application
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
