import database from "../../database";
import { AppError } from "../../errors/errors";

export const createCategoriesService = async (newCategory) => {
  const verifyCategoryAlredyExists = await database.query(
    `SELECT 
        *
      FROM
        categories
      WHERE
        categories.name = ($1);`,
    [newCategory.name]
  );

  if (verifyCategoryAlredyExists.rowCount) {
    throw new AppError("Category name alredy exists");
  }

  const queryResponse = await database.query(
    `INSERT INTO
          categories(name)
        VALUES
          ($1)
        RETURNING *;`,
    [newCategory.name]
  );
  return queryResponse.rows[0];
};
