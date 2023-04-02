import "reflect-metadata";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import CartController from "./infrastructure/controllers/cart.handler";
import ProductController from "./infrastructure/controllers/product.handler";
// import { CartService, ProductService } from "./application";
import Container from "typedi";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const productController = Container.get(ProductController);
const cartController = Container.get(CartController);

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
