import { PurchasesBusiness } from "./../../src/business/PurchasesBusiness";
import { BaseError } from "./../../src/errors/BaseError"
import { CartDatabaseMock } from "./../mocks/CartDatabaseMock";
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";
import { PurchasesDatabaseMock } from "./../mocks/PurchasesDatabaseMock";
import { IInputPurchaseDTO } from "./../../src/models/Interfaces";
import { IdGeneratorMock } from "./../mocks/IdGeneratorMock";

describe("Testando addPurchase", () => {
  const purchaseBusiness = new PurchasesBusiness(
    new PurchasesDatabaseMock(),
    new ProductsDatabaseMock(),
    new CartDatabaseMock(),
    new IdGeneratorMock()
  )

  test("uma mensagem de sucesso é retornada quando o addProductCart é bem-sucedido", async () => {
    const input: IInputPurchaseDTO = {
      name_user: "user teste", 
      delivery_date: "2022-10-27", 
      list_products: [
        {
          id: 12,
          name: "produto teste",
          price: 20,
          qty: 1,
          qty_stock: 120,
          totalValue: 20
        }
      ]
    }

    const response = await purchaseBusiness.addPurchase(input);
    expect(response.message).toBe("Compra salva no histórico com sucesso")
  })

  test("Erro quando um dos parâmetros estiver faltando", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        name_user: "", 
        delivery_date: "2022-10-27", 
        list_products: [
          {
            id: 12,
            name: "produto teste",
            price: 20,
            qty: 1,
            qty_stock: 120,
            totalValue: 20
          }
        ]
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetros faltantes")
      }
    }
  })

  test("Erro quando o parâmetro 'name' tiver mais de 20 caracters", async () => {
    expect.assertions(2)
    try {
      const input: IInputPurchaseDTO = {
        name_user: "usertestetestetestetestetestetestetesteteste", 
        delivery_date: "2022-10-27", 
        list_products: [
          {
            id: 12,
            name: "produto teste",
            price: 20,
            qty: 1,
            qty_stock: 120,
            totalValue: 20
          }
        ]
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("O parâmetro 'nome' deve ter no máximo 20 caracters")
      }
    }
  })

  test("Erro quando o parâmetro 'name_user' não é do tipo string", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        name_user: 12, 
        delivery_date: "2022-10-27", 
        list_products: [
          {
            id: 12,
            name: "produto teste",
            price: 20,
            qty: 1,
            qty_stock: 120,
            totalValue: 20
          }
        ]
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'name_user' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'delivery_date' não é do tipo string", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        name_user: "user teste", 
        delivery_date: 12, 
        list_products: [
          {
            id: 12,
            name: "produto teste",
            price: 20,
            qty: 1,
            qty_stock: 120,
            totalValue: 20
          }
        ]
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'delivery_date' inválido")
      }
    }
  })

  test("Erro quando o carrinho está vazio", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        name_user: "user teste", 
        delivery_date: "2022-10-27", 
        list_products: []
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Sua compra não foi salva pois o carrinho está vazio!")
      }
    }
  })

  test("Erro quando a data de entrega for anterior a atual", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        name_user: "user teste", 
        delivery_date: "2021-10-27", 
        list_products: [
          {
            id: 12,
            name: "produto teste",
            price: 20,
            qty: 1,
            qty_stock: 120,
            totalValue: 20
          }
        ]
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Não é permitido escolher datas passadas")
      }
    }
  })

  test("Erro quando o ID do produto não foi encontrado no banco", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        name_user: "user teste", 
        delivery_date: "2022-10-27", 
        list_products: [
          {
            id: 14,
            name: "produto teste",
            price: 20,
            qty: 1,
            qty_stock: 120,
            totalValue: 20
          }
        ]
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("ID do produto não encontrado")
      }
    }
  })

  test("Erro quando o estoque é insuficiente", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        name_user: "user teste", 
        delivery_date: "2022-10-27", 
        list_products: [
          {
            id: 12,
            name: "produto teste",
            price: 20,
            qty: 1000,
            qty_stock: 120,
            totalValue: 20
          }
        ]
      }

      await purchaseBusiness.addPurchase(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(409)
        expect(error.message).toBe(`Estoque insuficiente de Produto teste.\nEstoque disponível: 123`)
      }
    }
  })
})