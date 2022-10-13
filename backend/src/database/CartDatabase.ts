import { BaseDatabase } from "./BaseDatabase";
import { IInputProductCartDB, IOutputProductCartDB, IInputUpdateCartDB } from "../models/Interfaces";
import { Product } from "./../models/Product";

export class CartDatabase extends BaseDatabase {
  public static TABLE_CART = "SHOPPER_CART";
  public static TABLE_PRODUCTS = "SHOPPER_PRODUCTS";

  public toProductDBModel = (product: Product): IInputProductCartDB => {
    const productDB: IInputProductCartDB = {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        qty: product.getQty(),
        qty_stock: product.getQty_stock()
    }
    return productDB
  }

  public addProductCart = async (product: Product): Promise<void> => {
    const productDB = this.toProductDBModel(product)
    await BaseDatabase
      .connection(CartDatabase.TABLE_CART)
      .insert(productDB)
  }

  public findProductInCarById = async (id: number): Promise<IOutputProductCartDB[] | []> => {
    const product = await BaseDatabase
      .connection(CartDatabase.TABLE_CART)
      .select('*')
      .where({id})

    return product
  }

  public getCart = async (): Promise<IOutputProductCartDB[] | []> => {
    const result: IOutputProductCartDB[] | [] = await BaseDatabase
      .connection(CartDatabase.TABLE_CART)
      .select('*')
    
    return result
  }

  public updateCart = async (input: IInputUpdateCartDB): Promise<void> => {
    await BaseDatabase
      .connection.raw(`
        UPDATE ${CartDatabase.TABLE_CART}
        SET qty = ${input.qty}, totalValue = ${input.totalValue}
        WHERE (id = ${input.id})
      `)
  }

  public deleteProductCart = async (id: number): Promise<void> => {
    await BaseDatabase
      .connection(CartDatabase.TABLE_CART)
      .delete()
      .where({id})
  }

  public deleteAllProductsCart = async (): Promise<void> => {
    await BaseDatabase
      .connection(CartDatabase.TABLE_CART)
      .delete()
  }
}