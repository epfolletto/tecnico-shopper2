import { CartBusiness } from "./../../src/business/CartBusiness";
import { BaseError } from "./../../src/errors/BaseError"
import { CartDatabaseMock } from "./../mocks/CartDatabaseMock";
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";
import { IInputProductCartDTO } from "./../../src/models/Interfaces";

describe("Testando deleteProductCart", () => {
  const cartBusiness = new CartBusiness(
    new CartDatabaseMock(),
    new ProductsDatabaseMock(),
  )

  test("uma mensagem de sucesso é retornada quando o deleteCart é bem-sucedido", async () => {
    const id = 12;

    const response = await cartBusiness.deleteProductCart(id);
    expect(response.message).toBe("Produto removido com sucesso")
  })

  test("Erro quando o parâmetro 'id' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const id:any = "12";

      await cartBusiness.deleteProductCart(id);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("Parâmetro 'id' inválido");
      }
    }
  })

  test("Erro quando o ID do produto não é encontrado dentro do carrinho", async () => {
    expect.assertions(2)
    try {
      const id = 14;

      await cartBusiness.deleteProductCart(id);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("ID do produto não encontrado");
      }
    }
  })
})