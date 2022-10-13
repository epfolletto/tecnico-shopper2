import { ProductsBusiness } from "./../../src/business/ProductsBusiness";
import { BaseError } from "./../../src/errors/BaseError"
import { ProductsDatabaseMock } from "./../mocks/ProductsDatabaseMock";
import { IInputGetAllProductsDTO } from "./../../src/models/Interfaces";

describe("Testando o método getAllProducts", () => {
  const productsBusiness = new ProductsBusiness(
    new ProductsDatabaseMock(),
  )

  test("um array de objetos é retornado quando o getAllProducts é bem-sucedido", async () => {
    const input: IInputGetAllProductsDTO = {
      numProdPgn: 10,
      searchName: "",
      minimunPrice: 0,
      maximunPrice: 30,
      ordenation: "name",
      page: 1,
    }

    const response = await productsBusiness.getAllProducts(input);
    expect(response.products.length).toBe(3);
  })

  test("Erro quando o parâmetro 'numProdPgn' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        numProdPgn: "10",
        searchName: "a",
        minimunPrice: 0,
        maximunPrice: 30,
        ordenation: "name",
        page: 1,
      }

      await productsBusiness.getAllProducts(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'numProdPgn' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'searchName' não é do tipo string", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        numProdPgn: 10,
        searchName: 2,
        minimunPrice: 0,
        maximunPrice: 30,
        ordenation: "name",
        page: 1,
      }

      await productsBusiness.getAllProducts(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'searchName' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'minimunPrice' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        numProdPgn: 10,
        searchName: "a",
        minimunPrice: "0",
        maximunPrice: 30,
        ordenation: "name",
        page: 1,
      }

      await productsBusiness.getAllProducts(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'minimunPrice' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'maximunPrice' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        numProdPgn: 10,
        searchName: "a",
        minimunPrice: 0,
        maximunPrice: "30",
        ordenation: "name",
        page: 1,
      }

      await productsBusiness.getAllProducts(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'minimunPrice' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'ordenation' não é do tipo string", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        numProdPgn: 10,
        searchName: "a",
        minimunPrice: 0,
        maximunPrice: 30,
        ordenation: 2,
        page: 1,
      }

      await productsBusiness.getAllProducts(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'ordenation' inválido")
      }
    }
  })

  test("Erro quando o parâmetro 'page' não é do tipo number", async () => {
    expect.assertions(2)
    try {
      const input: any = {
        numProdPgn: 10,
        searchName: "a",
        minimunPrice: 0,
        maximunPrice: 30,
        ordenation: "name",
        page: "1",
      }

      await productsBusiness.getAllProducts(input);

    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400)
        expect(error.message).toBe("Parâmetro 'page' inválido")
      }
    }
  })
})