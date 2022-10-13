import { Router } from 'express';
import { PurchasesBusiness } from '../business/PurchasesBusiness';
import { PurchasesController } from '../controller/PurchasesController';
import { PurchasesDatabase } from '../database/PurchasesDatabase';
import { ProductsDatabase } from '../database/ProductsDatabase';
import { CartDatabase } from '../database/CartDatabase';
import { IdGenerator } from "../services/IdGenerator";

export const purchasesRouter = Router();

const purchasesController = new PurchasesController(
  new PurchasesBusiness(
    new PurchasesDatabase(),
    new ProductsDatabase(),
    new CartDatabase(),
    new IdGenerator
  )
)

purchasesRouter.post("/add", purchasesController.addPurchase);
purchasesRouter.get("/all", purchasesController.getAllPurchases);
purchasesRouter.delete("/delete/:id", purchasesController.deletePurchase);
purchasesRouter.get("/detail/:id", purchasesController.detailPurchase);