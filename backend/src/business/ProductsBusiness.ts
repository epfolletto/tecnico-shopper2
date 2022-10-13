import { ProductsDatabase } from "../database/ProductsDatabase";
import { ParamsError } from "../errors/ParamsError";
import { IInputGetAllProductsDTO, IInputGetAllProductsDB, 
         IOutputGetAllProductsDB } from "../models/Interfaces";

export class ProductsBusiness {
  constructor(
    private productsDatabase: ProductsDatabase,
  ) { }

  public getAllProducts = async (input: IInputGetAllProductsDTO) => {
    const numProdPgn = input.numProdPgn;
    const searchName = input.searchName as string || "";
    const minimunPrice = input.minimunPrice || 0;
    const maximunPrice = input.maximunPrice || 10**10;
    const ordenation = input.ordenation || "name";
    const page = input.page;

    if (typeof numProdPgn !== "number") {
      throw new ParamsError("Parâmetro 'numProdPgn' inválido")
    }

    if (typeof searchName !== "string") {
      throw new ParamsError("Parâmetro 'searchName' inválido")
    }

    if (typeof minimunPrice !== "number") {
      throw new ParamsError("Parâmetro 'minimunPrice' inválido")
    }

    if (typeof maximunPrice !== "number") {
      throw new ParamsError("Parâmetro 'minimunPrice' inválido")
    }

    if (typeof ordenation !== "string") {
      throw new ParamsError("Parâmetro 'ordenation' inválido")
    }

    if (typeof page !== "number") {
      throw new ParamsError("Parâmetro 'page' inválido")
    }

    let sort = "";
    let order = "";
    if(ordenation === "price-ASC" || ordenation === "price-DESC" || ordenation === "qty_stock-ASC" || ordenation === "qty_stock-DESC"){
      sort = ordenation.split("-")[0];
      order = ordenation.split("-")[1];
    } else{
      sort = "name";
      order = "ASC";
    }

    const offset = numProdPgn * (page - 1);

    const inputFilter: IInputGetAllProductsDB = {
      searchName, 
      numProdPgn, 
      minimunPrice, 
      maximunPrice, 
      offset, 
      sort, 
      order
    }

    const products: IOutputGetAllProductsDB[] = await this.productsDatabase.getAllProducts(inputFilter)

    const response = {
      products
    }

    return response
  }
}
