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

  test("um array de compras é retornad quando o detailPurchase é bem-sucedido", async () => {
    const id:any = "1";

    const response = await purchaseBusiness.detailPurchase(id);
    expect(response.purchases.length).toBe(2);
  })

  test("Erro quando o parâmetro 'id' não é do tipo string", async () => {
    expect.assertions(2)
    try {
      const id:any = 1;

      await purchaseBusiness.detailPurchase(id);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'id' inválido")
      }
    }
  })
})