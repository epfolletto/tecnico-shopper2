import { Router } from 'express';
import { CartBusiness } from '../business/CartBusiness';
import { CartController } from '../controller/CartController';
import { CartDatabase } from '../database/CartDatabase';
import { ProductsDatabase } from '../database/ProductsDatabase';

export const cartRouter = Router();

const cartController = new CartController(
  new CartBusiness(
    new CartDatabase(),
    new ProductsDatabase(),
  )
)

cartRouter.post("/add", cartController.addProductCart);
cartRouter.get("/all", cartController.getCart);
cartRouter.put("/update", cartController.updateCart);
cartRouter.delete("/delete/:id", cartController.deleteProductCart);