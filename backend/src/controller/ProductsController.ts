import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { BaseError } from "../errors/BaseError";
import { IInputGetAllProductsDTO } from "../models/Interfaces";

export class ProductsController {
  constructor(
    private productsBusiness: ProductsBusiness
  ) { }

  public getAllProducts = async (req: Request, res: Response) => {
    try {
      const input: IInputGetAllProductsDTO = {
        numProdPgn: req.body.numProdPgn,
        searchName: req.body.searchName,
        minimunPrice: req.body.minimunPrice,
        maximunPrice: req.body.maximunPrice,
        ordenation: req.body.ordenation,
        page: req.body.page
      }
      
      const response = await this.productsBusiness.getAllProducts(input)
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }
}