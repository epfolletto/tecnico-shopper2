import { CartDatabase } from "./../database/CartDatabase";
import { ProductsDatabase } from "./../database/ProductsDatabase";
import { ParamsError } from "./../errors/ParamsError";
import { NotFoundError } from "./../errors/NotFoundError";
import { IInputProductCartDTO, IOutputProductCartDB, 
         IInputUpdateCartDB, IInputUpdateCartDTO } from "./../models/Interfaces";
import { Product } from "./../models/Product";

export class CartBusiness {
  constructor(
    private cartDatabase: CartDatabase,
    private productsDatabase: ProductsDatabase
  ) { }

  public addProductCart = async (input: IInputProductCartDTO) => {
    const { id, name, price, qty, qty_stock } = input

    if (typeof id !== "number") {
      throw new ParamsError("Parâmetro 'id' inválido")
    }

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido")
    }

    if (typeof price !== "number") {
      throw new ParamsError("Parâmetro 'price' inválido")
    }

    if (typeof qty !== "number") {
      throw new ParamsError("Parâmetro 'qty' inválido")
    }

    if (typeof qty_stock !== "number") {
      throw new ParamsError("Parâmetro 'qty_stock' inválido")
    }

    const idExist = await this.productsDatabase.findProductById(id);
    if(!idExist.length){
      throw new NotFoundError("ID do produto não encontrado");
    }

    const product = new Product(
      id,
      name,
      price,
      qty,
      qty_stock
    )

    await this.cartDatabase.addProductCart(product)

    const response = {
      message: "Produto adicionado com sucesso"
    }

    return response
  }

  public getCart = async () => {
    const cart: IOutputProductCartDB[] | [] = await this.cartDatabase.getCart()

    const response = {
      cart
    }

    return response
  }

  public updateCart = async (input: IInputUpdateCartDTO) => {
    const { id, name, price, qty, totalValue } = input

    if (typeof id !== "number") {
      throw new ParamsError("Parâmetro 'id' inválido")
    }

    if (typeof name !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido")
    }

    if (typeof price !== "number") {
      throw new ParamsError("Parâmetro 'price' inválido")
    }

    if (typeof qty !== "number") {
      throw new ParamsError("Parâmetro 'qty' inválido")
    }

    if (typeof totalValue !== "number") {
      throw new ParamsError("Parâmetro 'totalValue' inválido")
    }

    const itemCart: IInputUpdateCartDB = {
      id,
      qty,
      totalValue
    }

    await this.cartDatabase.updateCart(itemCart);

    const response = {
      message: "Carrinho atualizado com sucesso"
    }

    return response
  }

  public deleteProductCart = async (id: number) => {
    if (typeof id !== "number") {
      throw new ParamsError("Parâmetro 'id' inválido")
    }

    const idExistInCar = await this.cartDatabase.findProductInCarById(id);
    if(!idExistInCar.length){
      throw new NotFoundError("ID do produto não encontrado");
    }

    await this.cartDatabase.deleteProductCart(id);

    const response = {
      message: "Produto removido com sucesso"
    }

    return response
  }
}
