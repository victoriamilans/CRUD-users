import { createCategoriesService } from "../../services/Categories/createCategories.service";

export const createCategorieController = async (req, res) => {
  const data = await createCategoriesService(req.validatedBody);

  return res.status(201).json(data);
};
