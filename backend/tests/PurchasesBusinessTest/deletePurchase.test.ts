import { PurchasesBusiness } from "./../../src/business/PurchasesBusiness";
import { BaseError } from "./../../src/errors/BaseError"
import { CartDatabaseMock } from "./../mocks/CartDatabaseMock";
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";
import { PurchasesDatabaseMock } from "./../mocks/PurchasesDatabaseMock";
import { IdGeneratorMock } from "./../mocks/IdGeneratorMock";

describe("Testando addPurchase", () => {
  const purchaseBusiness = new PurchasesBusiness(
    new PurchasesDatabaseMock(),
    new ProductsDatabaseMock(),
    new CartDatabaseMock(),
    new IdGeneratorMock()
  )

  test("uma mensagem de sucesso é retornada quando o deletePurchase é bem-sucedido", async () => {
    const id = "1";

    const response = await purchaseBusiness.deletePurchase(id);
    expect(response.message).toBe("Registro de compra removido com sucesso")
  })

  test("Erro quando o parâmetro 'id' não é do tipo string", async () => {
    expect.assertions(2)
    try {
      const id:any = 1;

      await purchaseBusiness.deletePurchase(id);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'id' inválido")
      }
    }
  })
})