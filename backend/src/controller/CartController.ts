import { Request, Response } from "express";
import { CartBusiness } from "../business/CartBusiness";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { BaseError } from "../errors/BaseError";
import { IInputProductCartDTO, IInputUpdateCartDTO } from "../models/Interfaces";

export class CartController {
  constructor(
    private cartBusiness: CartBusiness,
  ) { }

  public addProductCart = async (req: Request, res: Response) => {
    try {
      const input: IInputProductCartDTO = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        qty_stock: req.body.qty_stock
      }
      const response = await this.cartBusiness.addProductCart(input)
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }

  public getCart = async (req: Request, res: Response) => {
    try {
      const response = await this.cartBusiness.getCart()
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }

  public updateCart = async (req: Request, res: Response) => {
    try {
      const input: IInputUpdateCartDTO = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty,
        qty_stock: req.body.qty_stock,
        totalValue: req.body.totalValue
      }
      const response = await this.cartBusiness.updateCart(input)
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }

  public deleteProductCart = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const response = await this.cartBusiness.deleteProductCart(id)
      res.status(201).send(response)
    } catch (error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message })
      }
      res.status(500).send({ message: "Erro no servidor!" })
    }
  }
}