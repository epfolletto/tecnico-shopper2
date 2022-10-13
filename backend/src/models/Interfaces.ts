export interface IProductDB {
  id: number,
  name: string,
  price: number,
  qty_stock: number
}

// Interfaces do CartController
export interface IInputProductCartDTO {
  id: number,
  name: string,
  price: number,
  qty: number,
  qty_stock: number
}

export interface IInputProductCartDB {
  id: number,
  name: string,
  price: number,
  qty: number,
  qty_stock: number
}

export interface IOutputProductCartDB {
  id: number,
  name: string,
  price: number,
  qty: number,
  qty_stock: number,
  totalValue: number
}

export interface IInputUpdateCartDTO {
  id: number,
  name: string,
  price: number,
  qty: number,
  qty_stock: number,
  totalValue: number
}

export interface IInputUpdateCartDB {
  id: number,
  qty: number,
  totalValue: number
}

// Interfaces do productsController
export interface IInputGetAllProductsDTO {
  numProdPgn: number,
  searchName: string
  minimunPrice: number,
  maximunPrice: number,
  ordenation: string,
  page: number
}

export interface IInputGetAllProductsDB {
  searchName: string
  numProdPgn: number,
  minimunPrice: number,
  maximunPrice: number,
  offset: number,
  sort: string,
  order: string
}

export interface IOutputGetAllProductsDB {
  id: number,
  name: string,
  price: number,
  qty_stock: number
}

// Interfaces do purchasesController

export interface IInputPurchaseDTO {
  name_user: string,
  delivery_date: string,
  list_products: IItemPurchase[]
}

export interface IInputPurchaseDB {
  id: string,
  id_purchase: string,
  name_user: string,
  delivery_date: Date,
  product_id: number,
  qty: number
}

export interface IDetailPurchaseOutputDB {
  name: string,
  price: number,
  qty: number,
  total: number
}


















export interface IAddProductCartDB {
  id: number,
  name: string,
  price: number,
  qty: number,
  qty_stock: number
}

export interface IItemPurchase {
  id: number,
  name: string,
  price: number,
  qty: number,
  qty_stock: number,
  totalValue: number
}





export interface IPurchaseOutputDB {
  id_purchase: string,
  name_user: string,
  delivery_date: Date | string,
  num_products: number,
  num_itens: number,
  total: number
}





