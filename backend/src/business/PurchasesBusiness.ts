import { PurchasesDatabase } from "../database/PurchasesDatabase";
import { ProductsDatabase } from "./../database/ProductsDatabase";
import { CartDatabase } from "./../database/CartDatabase";
import { ParamsError } from "../errors/ParamsError";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "./../errors/NotFoundError";
import { IInputPurchaseDTO, IPurchaseOutputDB, IDetailPurchaseOutputDB } from "../models/Interfaces";
import { IdGenerator } from "../services/IdGenerator";
import { Purchase } from "./../models/Purchase";

export class PurchasesBusiness {
  constructor(
    private purchasesDatabase: PurchasesDatabase,
    private productsDatabase: ProductsDatabase,
    private cartDatabase: CartDatabase,
    private idGenerator: IdGenerator
  ) { }

  public addPurchase = async (input: IInputPurchaseDTO) => {
    const { name_user, delivery_date, list_products } = input
    
    if (!name_user || !delivery_date || !list_products) {
      throw new ParamsError("Parâmetros faltantes")
    }

    if (name_user.length > 20) {
      throw new ParamsError("O parâmetro 'nome' deve ter no máximo 20 caracters")
    }

    if (typeof name_user !== "string") {
      throw new ParamsError("Parâmetro 'name_user' inválido")
    }

    if (typeof delivery_date !== "string") {
      throw new ParamsError("Parâmetro 'delivery_date' inválido")
    }

    if (list_products.length === 0) {
      throw new ParamsError("Sua compra não foi salva pois o carrinho está vazio!")
    }

    const delivery_dateDB = new Date(delivery_date.replaceAll('-', '/'));
    
    if (delivery_dateDB.getTime() < Date.now()) {
      throw new ParamsError("Não é permitido escolher datas passadas")
    }

    const id_purchase = this.idGenerator.generate()

    for(let i=0 ; i<list_products.length; i++){
      const productExist = await this.productsDatabase.findProductById(list_products[i].id);
      if(!productExist.length){
        throw new NotFoundError("ID do produto não encontrado");
      }

      if( list_products[i].qty > productExist[0].qty_stock ){
        throw new ConflictError(`Estoque insuficiente de ${productExist[0].name}.\nEstoque disponível: ${productExist[0].qty_stock}`);
      }
    }

    for(let i=0 ; i<list_products.length; i++){
      const id = this.idGenerator.generate()
      const purchase = new Purchase(
        id,
        id_purchase,
        name_user,
        delivery_dateDB,
        list_products[i].id,
        list_products[i].qty
      )
      await this.purchasesDatabase.addPurchase(purchase)
    }

    list_products.forEach(async product => {
      await this.productsDatabase.updateQtyProductById(product.id, product.qty_stock-product.qty)
    })

    await this.cartDatabase.deleteAllProductsCart();

    const response = {
      message: "Compra salva no histórico com sucesso"
    }

    return response
  }

  public getAllPurchases = async () => {
    const purchases: IPurchaseOutputDB[] | [] = await this.purchasesDatabase.getAllPurchases()

    purchases.length > 0 && purchases.forEach(purchase => {
      const dataString = purchase.delivery_date.toLocaleString().split(' ')[0];
      purchase.delivery_date = dataString
    })
    const response = {
      purchases
    }

    return response
  }

  public deletePurchase = async (id: string) => {
    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'id' inválido")
    }

    await this.purchasesDatabase.deletePurchase(id);

    const response = {
      message: "Registro de compra removido com sucesso"
    }

    return response
  }

  public detailPurchase = async (id: string) => {
    if (typeof id !== "string") {
      throw new ParamsError("Parâmetro 'id' inválido")
    }

    const purchases: IDetailPurchaseOutputDB[] | [] = await this.purchasesDatabase.detailPurchase(id);
    
    const response = {
      purchases
    }

    return response
  }
}