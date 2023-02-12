import database from "../../database";
import { AppError } from "../../errors/errors";

export const editProductService = async (id, body) => {
  const verifyProduct = await database.query(
    `SELECT 
    *
  FROM
    products
  WHERE
    products.id = ($1);`,
    [id]
  );
  let product = verifyProduct.rows[0];
  const verifyCategoryAlredyExists = await database.query(
    `SELECT 
        *
      FROM
        categories
      WHERE
        categories.id = ($1);`,
    [body.category_id]
  );

  if (!verifyCategoryAlredyExists.rowCount) {
    throw new AppError("Category not found");
  }

  const queryResponse = await database.query(
    `
      UPDATE
          products
      SET
          name = ($1), price = ($2), category_id = ($3)
      WHERE
         products.id = ($4)
      RETURNING*;`,
    [
      body.name ? body.name : product.name,
      body.price ? body.price : product.price,
      body.category_id ? body.category_id : product.category_id,
      id,
    ]
  );

  return queryResponse.rows[0];
};
