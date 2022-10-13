export class Purchase {
  constructor(
    private id: string,
    private id_purchase: string,
    private name_user: string,
    private delivery_date: Date,
    private product_id: number,
    private qty: number
  ) {}

  public getId = () => {
      return this.id
  }

  public getIdPurchase = () => {
      return this.id_purchase
  }

  public getNameUser = () => {
      return this.name_user
  }

  public getDeliveryDate = () => {
      return this.delivery_date
  }

  public getProductId = () => {
      return this.product_id
  }

  public getQty = () => {
      return this.qty
  }
}