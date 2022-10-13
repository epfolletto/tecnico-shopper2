import { BaseDatabase } from "../BaseDatabase";
import { ProductsDatabase } from "../ProductsDatabase";
import { CartDatabase } from "../CartDatabase";
import { PurchasesDatabase } from "../PurchasesDatabase";
import { products } from "./data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...")
      await this.createTables()
      console.log("Tables created successfully.")

      console.log("Populating tables...")
      await this.insertData()
      console.log("Tables populated successfully.")

      console.log("Migrations completed.")
    } catch (error) {
      console.log("FAILED! Error in migrations...")
      if (error instanceof Error) {
        console.log(error.message)
      }
    } finally {
      console.log("Ending connection...")
      BaseDatabase.connection.destroy()
      console.log("Connection closed graciously.")
    }
  }

  createTables = async () => {
    await BaseDatabase.connection.raw(`
    DROP TABLE IF EXISTS ${PurchasesDatabase.TABLE_PURCHASES};
        DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${CartDatabase.TABLE_CART};

        CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_PRODUCTS}(
          id INT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price FLOAT NOT NULL,
          qty_stock INT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${CartDatabase.TABLE_CART}(
          id INT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price FLOAT NOT NULL,
          qty INT NOT NULL,
          qty_stock INT NOT NULL,
          totalValue FLOAT NOT NULL DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS ${PurchasesDatabase.TABLE_PURCHASES}(
          id VARCHAR(255) PRIMARY KEY,
          id_purchase VARCHAR(255) NOT NULL,
          name_user VARCHAR(255) NOT NULL,
          delivery_date DATE NOT NULL,
          product_id INT NOT NULL,
          FOREIGN KEY (product_id) REFERENCES ${ProductsDatabase.TABLE_PRODUCTS}(id),
          qty INT NOT NULL
        );
    `)
  }

  insertData = async () => {
    await BaseDatabase
      .connection(ProductsDatabase.TABLE_PRODUCTS)
      .insert(products)
  }
}

const migrations = new Migrations()
migrations.execute()