import { PurchasesBusiness } from "./../../src/business/PurchasesBusiness";
import { CartDatabaseMock } from "./../mocks/CartDatabaseMock";
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";
import { PurchasesDatabaseMock } from "./../mocks/PurchasesDatabaseMock";
import { IdGeneratorMock } from "./../mocks/IdGeneratorMock";

describe("Testando getAllPurchase", () => {
  const purchaseBusiness = new PurchasesBusiness(
    new PurchasesDatabaseMock(),
    new ProductsDatabaseMock(),
    new CartDatabaseMock(),
    new IdGeneratorMock()
  )

  test("um array de produtos é retornado quando o getAllPurchases é bem-sucedido", async () => {
    const response = await purchaseBusiness.getAllPurchases();
    expect(response.purchases.length).toBe(1)
  })
})