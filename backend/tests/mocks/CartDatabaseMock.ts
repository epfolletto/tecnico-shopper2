import { BaseDatabase } from "./../../src/database/BaseDatabase";
import { IInputProductCartDB, IOutputProductCartDB, IInputUpdateCartDB,
         IOutputGetAllProductsDB } from "./../../src/models/Interfaces";
import { Product } from "./../../src/models/Product";

export class CartDatabaseMock extends BaseDatabase {
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

  public addProductCart = async (product: Product): Promise<void> => { }

  public findProductInCarById = async (id: number): Promise<IOutputProductCartDB[] | []> => {
    if(id !== 12){
      return []
    } else {
      const product = [{
        id: 12,
        name: "Produto retorno teste",
        price: 18,
        qty: 1,
        qty_stock: 123,
        totalValue: 20
      }]
      return product
    }
  }

  public getCart = async (): Promise<IOutputProductCartDB[] | []> => {
    const cart = [
      {
        id: 16,
        name: 'AZEITE PORTUGUÊS EXTRA VIRGEM GALLO 500ML',
        price: 20.49,
        qty: 1,
        qty_stock: 1,
        totalValue: 0
      },
      {
        id: 59,
        name: 'BEBIDA A BASE DE SOJA ADES LARANJA 1L',
        price: 5.39,
        qty: 1,
        qty_stock: 916,
        totalValue: 0
      }
    ]

    return cart
  }

  public updateCart = async (input: IInputUpdateCartDB): Promise<void> => { }

  public deleteProductCart = async (id: number): Promise<void> => { }

  public deleteAllProductsCart = async (): Promise<void> => { }
}