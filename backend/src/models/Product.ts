export interface IProductDB {
  id: number,
  name: string,
  price: number,
  qty_stock: number,
  qty: number
}

export class Product {
  constructor(
      private id: number,
      private name: string,
      private price: number,
      private qty: number,
      private qty_stock: number
  ) {}

  public getId = () => {
      return this.id
  }

  public getName = () => {
      return this.name
  }

  public getPrice = () => {
      return this.price
  }

  public getQty_stock = () => {
      return this.qty_stock
  }

  public getQty = () => {
      return this.qty
  }
}