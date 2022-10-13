import { BaseDatabase } from "./BaseDatabase";
import { IInputPurchaseDB, IPurchaseOutputDB, IDetailPurchaseOutputDB } from "../models/Interfaces";
import { Purchase } from "./../models/Purchase";

export class PurchasesDatabase extends BaseDatabase {
  public static TABLE_PURCHASES = "SHOPPER_PURCHASES";
  public static TABLE_PRODUCTS = "SHOPPER_PRODUCTS";

  public toPurchaseDBModel = (purchase: Purchase): IInputPurchaseDB => {
    const purchaseDB: IInputPurchaseDB = {
        id: purchase.getId(),
        id_purchase: purchase.getIdPurchase(),
        name_user: purchase.getNameUser(),
        delivery_date: purchase.getDeliveryDate(),
        product_id: purchase.getProductId(),
        qty: purchase.getQty()
    }
    return purchaseDB
  }

  public addPurchase = async (input: Purchase): Promise<void> => {
    const purchaseDB = this.toPurchaseDBModel(input);
    await BaseDatabase
      .connection(PurchasesDatabase.TABLE_PURCHASES)
      .insert(purchaseDB)
  }

  public getAllPurchases = async (): Promise<IPurchaseOutputDB[] | []> => {
    const [result] = await BaseDatabase
      .connection.raw(`
      SELECT id_purchase, name_user, delivery_date, COUNT(id_purchase) as num_products, SUM(qty) as num_itens, SUM((qty * price)) as total
        FROM ${PurchasesDatabase.TABLE_PURCHASES}
        LEFT JOIN ${PurchasesDatabase.TABLE_PRODUCTS}
        ON ${PurchasesDatabase.TABLE_PRODUCTS}.id = ${PurchasesDatabase.TABLE_PURCHASES}.product_id
        GROUP BY id_purchase, ${PurchasesDatabase.TABLE_PURCHASES}.name_user, delivery_date;
      `)
    return result
  }

  public deletePurchase = async (id: string): Promise<void> => {
    await BaseDatabase
      .connection(PurchasesDatabase.TABLE_PURCHASES)
      .delete()
      .where({id_purchase: id})
  }

  public detailPurchase = async (id: string): Promise<IDetailPurchaseOutputDB[] | []> => {
    const [result] = await BaseDatabase
      .connection.raw(`
        SELECT name, price, qty, (qty*price) as total
        FROM ${PurchasesDatabase.TABLE_PURCHASES}
        JOIN ${PurchasesDatabase.TABLE_PRODUCTS}
        ON ${PurchasesDatabase.TABLE_PRODUCTS}.id = ${PurchasesDatabase.TABLE_PURCHASES}.product_id
        WHERE ${PurchasesDatabase.TABLE_PURCHASES}.id_purchase = '${id}'
      `)
    return result
  }
}