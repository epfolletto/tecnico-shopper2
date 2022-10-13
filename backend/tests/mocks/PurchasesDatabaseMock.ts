import { BaseDatabase } from "./../../src/database/BaseDatabase";
import { IInputPurchaseDB, IPurchaseOutputDB, IDetailPurchaseOutputDB } from "./../../src/models/Interfaces";
import { Purchase } from "./../../src/models/Purchase";

export class PurchasesDatabaseMock extends BaseDatabase {
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

  public addPurchase = async (input: Purchase): Promise<void> => { }

  public getAllPurchases = async (): Promise<IPurchaseOutputDB[] | []> => {
    const result = [
      {
        id_purchase: "1",
        name_user: "fulano",
        delivery_date: new Date(),
        num_products: 2,
        num_itens: 4,
        total: 122
      }
    ]
    return result
  }

  public deletePurchase = async (id: string): Promise<void> => { }

  public detailPurchase = async (id: string): Promise<IDetailPurchaseOutputDB[] | []> => {
    const result = [
      {
        name: "produto 1",
        price: 14,
        qty: 2,
        total: 28
      },
      {
        name: "produto 2",
        price: 12,
        qty: 3,
        total: 36
      }
    ]
    
    return result
  }
}