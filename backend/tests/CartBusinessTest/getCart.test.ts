import { CartBusiness } from "./../../src/business/CartBusiness";
import { CartDatabaseMock } from "./../mocks/CartDatabaseMock";
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";

describe("Testando getCart", () => {
  const cartBusiness = new CartBusiness(
    new CartDatabaseMock(),
    new ProductsDatabaseMock(),
  )

  test("um array de objetos é retornado em caso de sucesso", async () => {

    const response = await cartBusiness.getCart();
    expect(response.cart.length).toBe(2);
  })
})