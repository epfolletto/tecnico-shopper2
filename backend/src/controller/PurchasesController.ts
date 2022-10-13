import { Request, Response } from "express";
import { PurchasesBusiness } from "../business/PurchasesBusiness";
import { BaseError } from "../errors/BaseError";
import { IInputPurchaseDTO } from "../models/Interfaces";

export class PurchasesController {
  constructor(
    private purchasesBusiness: PurchasesBusiness
  ) { }

  public addPurchase = async (req: Request, res: Response) => {
    try {
      const input: IInputPurchaseDTO = {
        name_user: req.body.name_user,
        delivery_date: req.body.delivery_date,
        list_products: req.body.list_products
      }
      const response = await this.purchasesBusiness.addPurchase(input)
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }

  public getAllPurchases = async (req: Request, res: Response) => {
    try {
      const response = await this.purchasesBusiness.getAllPurchases()
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }

  public deletePurchase = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const response = await this.purchasesBusiness.deletePurchase(id)
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }

  public detailPurchase = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const response = await this.purchasesBusiness.detailPurchase(id)
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }
}