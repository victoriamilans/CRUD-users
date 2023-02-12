import database from "../database";
import { AppError } from "../errors/errors";

export const verifyIdExistMiddleware = () => async (req, res, next) => {
  const verifyidyExists = await database.query(
    `SELECT 
            *
        FROM
            categories
        WHERE
            categories.id = ($1);`,
    [req.params.id]
  );
  if (!verifyidyExists.rowCount) {
    throw new AppError("Category not found", 404);
  }
  next();
};

export const verifyProductIdExistMiddleware = () => async (req, res, next) => {
  const verifyidyExists = await database.query(
    `SELECT 
      *
    FROM
      products
    WHERE
      products.id = ($1);`,
    [req.params.id]
  );
  console.log(verifyidyExists);
  if (!verifyidyExists.rowCount > 0) {
    throw new AppError("Product not found", 404);
  }
  next();
};
