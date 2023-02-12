import database from "../../database";
import { AppError } from "../../errors/errors";

export const listProductsByCategoryIdService = async (id) => {
  const queryResponse = await database.query(
    `SELECT 
      products.name,
      products.price,
      categories.name category
    FROM 
      products 
    JOIN 
      categories ON categories.id = products.category_id
    WHERE categories.id = $1;
    `,
    [id]
  );

  if (!queryResponse.rowCount) {
    throw new AppError("This category don't have products", 400);
  }

  return queryResponse.rows;
};
