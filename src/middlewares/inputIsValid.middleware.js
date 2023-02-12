import database from "../database";
import { AppError } from "../errors/errors";

export const inputIsValidMiddleware = () => async (req, res, next) => {
  if (isNaN(req.params.id)) {
    throw new AppError("Id must be of type number", 404);
  }
  next();
};

export const inputUuidIsValidMiddleware = () => async (req, res, next) => {
  try {
    const verifyProductExists = await database.query(
      `
    SELECT 
      *
    FROM
      products
    WHERE 
      products.id = ($1);
      `,
      [req.params.id]
    );

    if (!verifyProductExists.rowCount) {
      throw new AppError("Product not found.", 404);
    }
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      throw new AppError(error.message.message, error.statusCode);
    }
    if (error.routine === "string_to_uuid") {
      throw new AppError(
        "The id passed by parameter must be of type uuid",
        404
      );
    }
  }

  return next();
};
