import { CartBusiness } from "./../../src/business/CartBusiness";
import { BaseError } from "./../../src/errors/BaseError"
import { CartDatabaseMock } from "./../mocks/CartDatabaseMock";
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";
import { IInputProductCartDTO } from "./../../src/models/Interfaces";

describe("Testando addProductCart", () => {
  const cartBusiness = new CartBusiness(
    new CartDatabaseMock(),
    new ProductsDatabaseMock(),
  )

  test("uma mensagem de sucesso é retornada quando o addProductCart é bem-sucedido", async () => {
    const input: any = {
      id: 12,
      name: "Produto teste",
      price: 15,
      qty: 1,
      qty_stock: 100
    }

    const response = await cartBusiness.addProductCart(input);
    expect(response.message).toBe("Produto adicionado com sucesso")
  })

  test("Erro quando o parâmetro 'id' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: "12",
        name: "Produto teste",
        price: 15,
        qty: 1,
        qty_stock: 100
      }

      await cartBusiness.addProductCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'id' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'name' não é do tipo string", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: 12,
        name: 12,
        price: 15,
        qty: 1,
        qty_stock: 100
      }

      await cartBusiness.addProductCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'name' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'price' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: 12,
        name: "Produto teste",
        price: "15",
        qty: 1,
        qty_stock: 100
      }

      await cartBusiness.addProductCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'price' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'qty' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: 12,
        name: "Produto teste",
        price: 15,
        qty: "1",
        qty_stock: 100
      }

      await cartBusiness.addProductCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'qty' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'qty_stock' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: 12,
        name: "Produto teste",
        price: 15,
        qty: 1,
        qty_stock: "100"
      }

      await cartBusiness.addProductCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'qty_stock' inválido")
      }
    }
  })

  test("Erro quando o ID do produto não existe", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: 14678454,
        name: "Produto teste",
        price: 15,
        qty: 1,
        qty_stock: 100
      }

      await cartBusiness.addProductCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe("ID do produto não encontrado")
      }
    }
  })
})