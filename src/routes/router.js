import { Router } from "express";
import { createCategorieController } from "../controllers/Categories/createCategories.controller";
import { deleteCategoryController } from "../controllers/Categories/deleteCategory.controller";
import { editCategoryController } from "../controllers/Categories/editCategory.controller";
import { listCategoriesController } from "../controllers/Categories/listCategories.controller";
import { listCategoryByIdController } from "../controllers/Categories/listCategoryById.controller";
import { createProductController } from "../controllers/Products/createProduct.controller";
import { deleteProductController } from "../controllers/Products/deleteProduct.controller";
import { editProductController } from "../controllers/Products/editProduct.controller";
import { listProductByIdController } from "../controllers/Products/listProductById.controller";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import {
  inputIsValidMiddleware,
  inputUuidIsValidMiddleware,
} from "../middlewares/inputIsValid.middleware";
import {
  verifyIdExistMiddleware,
  verifyProductIdExistMiddleware,
} from "../middlewares/verifyIdExist.middleware";
import {
  createCategorySchema,
  editCategorySchema,
} from "../schemas/categories.schema";
import { createProductSchema } from "../schemas/products.schema";

export const categoriesRouter = Router();
export const productsRouter = Router();
export const productByCategory = Router();

categoriesRouter.get("", listCategoriesController);

categoriesRouter.get(
  "/:id",
  inputIsValidMiddleware(),
  verifyIdExistMiddleware(),
  listCategoryByIdController
);

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

productsRouter.post(
  "",
  dataIsValidMiddleware(createProductSchema),
  createProductController
);

productsRouter.patch(
  "/:id",
  inputUuidIsValidMiddleware(),
  verifyProductIdExistMiddleware(),
  editProductController
);

productsRouter.delete(
  "/:id",
  inputUuidIsValidMiddleware(),
  verifyProductIdExistMiddleware(),
  deleteProductController
);

productsRouter.get(
  "/:id",
  inputUuidIsValidMiddleware(),
  listProductByIdController
);
