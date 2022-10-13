import { BaseDatabase } from "./BaseDatabase";
import { IInputGetAllProductsDB, IOutputGetAllProductsDB } from "../models/Interfaces";

export class ProductsDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "SHOPPER_PRODUCTS"

  public findProductById = async (id: number): Promise<IOutputGetAllProductsDB[] | []> => {
    const product = await BaseDatabase
      .connection(ProductsDatabase.TABLE_PRODUCTS)
      .select('*')
      .where({id})
    return product
  }

  public getAllProducts = async (input: IInputGetAllProductsDB): Promise<IOutputGetAllProductsDB[]> => {
    const searchName = input.searchName;
    const numProdPgn = input.numProdPgn;
    const minimunPrice = input.minimunPrice;
    const maximunPrice = input.maximunPrice;
    const offset = input.offset;
    const sort = input.sort;
    const order = input.order;

    if(numProdPgn !== 0) {
      const [products] = await BaseDatabase
        .connection.raw(`
          SELECT *
          FROM ${ProductsDatabase.TABLE_PRODUCTS}
          WHERE ( ${ProductsDatabase.TABLE_PRODUCTS}.name LIKE "%${searchName}%" AND (${ProductsDatabase.TABLE_PRODUCTS}.price BETWEEN ${minimunPrice} AND ${maximunPrice})  )
          ORDER BY ${sort} ${order}
          LIMIT ${numProdPgn}
          OFFSET ${offset}
        `)
      return products
    } else {
      const [products] = await BaseDatabase
        .connection.raw(`
          SELECT *
          FROM ${ProductsDatabase.TABLE_PRODUCTS}
          WHERE ( ${ProductsDatabase.TABLE_PRODUCTS}.name LIKE "%${searchName}%" AND (${ProductsDatabase.TABLE_PRODUCTS}.price BETWEEN ${minimunPrice} AND ${maximunPrice})  )
          ORDER BY ${sort} ${order}
        `)
      return products
    }
  }

  public updateQtyProductById = async (id: number, qty: number): Promise<void> => {
    await BaseDatabase
      .connection(ProductsDatabase.TABLE_PRODUCTS)
      .update({ qty_stock: qty })
      .where({ id })
  }
}