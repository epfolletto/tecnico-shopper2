import { CartBusiness } from "./../../src/business/CartBusiness";
import { BaseError } from "./../../src/errors/BaseError"
import { CartDatabaseMock } from "./../mocks/CartDatabaseMock";
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";

describe("Testando updateCart", () => {
  const cartBusiness = new CartBusiness(
    new CartDatabaseMock(),
    new ProductsDatabaseMock(),
  )

  test("uma mensagem de sucesso é retornada quando o updateCart é bem-sucedido", async () => {
    const input: any = {
      id: 12,
      name: "Produto teste",
      price: 15,
      qty: 3,
      qty_stock: 100,
      totalValue: 200
    }

    const response = await cartBusiness.updateCart(input);
    expect(response.message).toBe("Carrinho atualizado com sucesso")
  })

  test("Erro quando o parâmetro 'id' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: "12",
        name: "Produto teste",
        price: 15,
        qty: 1,
        qty_stock: 100,
        totalValue: 200
      }

      await cartBusiness.updateCart(input);

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
        qty_stock: 100,
        totalValue: 200
      }

      await cartBusiness.updateCart(input);

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
        qty_stock: 100,
        totalValue: 200
      }

      await cartBusiness.updateCart(input);

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
        qty_stock: 100,
        totalValue: 200
      }

      await cartBusiness.updateCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'qty' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'totalValue' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        id: 12,
        name: "Produto teste",
        price: 15,
        qty: 1,
        qty_stock: 100,
        totalValue: "200"
      }

      await cartBusiness.updateCart(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'totalValue' inválido")
      }
    }
  })
})