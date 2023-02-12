import { Router } from "express";
import { createCategorieController } from "../controllers/Categories/createCategories.controller";
import { deleteCategoryController } from "../controllers/Categories/deleteCategory.controller";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import { inputIsValidMiddleware } from "../middlewares/inputIsValid.middleware";
import { createCategorySchema } from "../schemas/categories.schema";

export const categoriesRouter = Router();
export const productsRouter = Router();
export const productByCategory = Router();

categoriesRouter.post(
  "",
  dataIsValidMiddleware(createCategorySchema),
  createCategorieController
);

categoriesRouter.delete(
  "/:id",
  inputIsValidMiddleware(),
  deleteCategoryController
);
