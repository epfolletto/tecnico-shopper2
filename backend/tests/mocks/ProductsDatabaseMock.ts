import { BaseDatabase } from "./../../src/database/BaseDatabase";
import { IInputGetAllProductsDB, IOutputGetAllProductsDB } from "./../../src/models/Interfaces";

export class ProductsDatabaseMock extends BaseDatabase {
  public static TABLE_PRODUCTS = "SHOPPER_PRODUCTS"

  public findProductById = async (id: number): Promise<IOutputGetAllProductsDB[] | []> => {
    if(id !== 12){
      return []
    } else {
      const product = [{
        id: 14,
        name: "Produto teste",
        price: 18,
        qty_stock: 123
      }]
      return product
    }
  }

  public getAllProducts = async (input: IInputGetAllProductsDB): Promise<IOutputGetAllProductsDB[]> => {
    const searchName = input.searchName;
    const numProdPgn = input.numProdPgn;
    const minimunPrice = input.minimunPrice;
    const maximunPrice = input.maximunPrice;
    const offset = input.offset;
    const sort = input.sort;
    const order = input.order;

    const products = [
      {
        id: 16,
        name: "AZEITE PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
        price: 20.49,
        qty_stock: 158,
      },
      {
        id: 18,
        name: "BEBIDA ENERGÉTICA VIBE 2L",
        price: 8.99,
        qty_stock: 659,
      },
      {
        id: 19,
        name: "ENERGÉTICO RED BULL ENERGY DRINK 250ML",
        price: 7.29,
        qty_stock: 909,
      }
    ]
    return products
  }

  public updateQtyProductById = async (id: number, qty: number): Promise<void> => { }
}