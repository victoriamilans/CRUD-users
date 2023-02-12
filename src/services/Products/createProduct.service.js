import database from "../../database";
import { AppError } from "../../errors/errors";

export const createProductService = async (newProduct) => {
  const verifyProductAlredyExists = await database.query(
    `SELECT 
        *
    FROM
        products
    WHERE
        products.name = ($1)`,
    [newProduct.name]
  );

  const verifyCategoryAlredyExists = await database.query(
    `SELECT 
        *
      FROM
        categories
      WHERE
        categories.id = ($1);`,
    [newProduct.category_id]
  );

  if (verifyProductAlredyExists.rowCount > 0) {
    throw new AppError("Product name alredy exists");
  }
  if (!verifyCategoryAlredyExists.rowCount > 0) {
    throw new AppError("Category does not exist");
  }

  const queryResponse = await database.query(
    `INSERT INTO
          products(name, price, category_id)
    VALUES
        ($1, $2, $3)
    RETURNING *;`,
    [newProduct.name, newProduct.price, newProduct.category_id]
  );
  return queryResponse.rows[0];
};
