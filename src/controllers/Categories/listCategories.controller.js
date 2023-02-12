import { listCategoriesService } from "../../services/Categories/listCategories.service";

export const listCategoriesController = async (req, res) => {
  const data = await listCategoriesService();

  return res.status(200).json(data);
};
