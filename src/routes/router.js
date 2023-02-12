import { Router } from "express";
import { createCategorieController } from "../controllers/Categories/createCategories.controller";
import { deleteCategoryController } from "../controllers/Categories/deleteCategory.controller";
import { editCategoryController } from "../controllers/Categories/editCategory.controller";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import { inputIsValidMiddleware } from "../middlewares/inputIsValid.middleware";
import { verifyIdExistMiddleware } from "../middlewares/verifyIdExist.middleware";
import {
  createCategorySchema,
  editCategorySchema,
} from "../schemas/categories.schema";

export const categoriesRouter = Router();
export const productsRouter = Router();
export const productByCategory = Router();

categoriesRouter.post(
  "",
  dataIsValidMiddleware(createCategorySchema),
  createCategorieController
);

categoriesRouter.patch(
  "/:id",
  inputIsValidMiddleware(),
  verifyIdExistMiddleware(),
  dataIsValidMiddleware(editCategorySchema),
  editCategoryController
);

categoriesRouter.delete(
  "/:id",
  inputIsValidMiddleware(),
  verifyIdExistMiddleware(),
  deleteCategoryController
);
