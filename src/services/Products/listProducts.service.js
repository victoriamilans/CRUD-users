import database from "../../database";
import { AppError } from "../../errors/errors";

export const listProductsService = async (newProduct) => {
  const queryResponse = await database.query(
    `SELECT 
        *
    FROM
        products;`
  );

  if (!queryResponse.rows[0]) {
    throw new AppError("There are no products yet", 200);
  }
  return queryResponse.rows;
};
