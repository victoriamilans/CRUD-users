import database from "../../database";
import { AppError } from "../../errors/errors";

export const listCategoriesService = async (category) => {
  const queryResponse = await database.query(
    `SELECT 
        *
    FROM
        categories;`
  );

  if (!queryResponse.rows[0]) {
    throw new AppError("There are no categories yet", 400);
  }

  return queryResponse.rows;
};
