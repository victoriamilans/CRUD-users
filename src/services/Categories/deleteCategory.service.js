import database from "../../database";
import { AppError } from "../../errors/errors";

export const deleteCategoryByIdService = async (id) => {
  const verifyCategoryAlredyExists = await database.query(
    `SELECT 
        *
        FROM
            categories
        WHERE
            categories.id = ($1);`,
    [id]
  );

  if (!verifyCategoryAlredyExists.rowCount) {
    throw new AppError("Category not found");
  }

  const queryResponse = await database.query(
    `
    DELETE FROM 
        categories 
    WHERE 
        categories.id = ($1);`,
    [id]
  );
};
