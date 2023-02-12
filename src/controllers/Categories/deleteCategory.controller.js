import { deleteCategoryByIdService } from "../../services/Categories/deleteCategory.service";

export const deleteCategoryController = async (req, res) => {
  const data = await deleteCategoryByIdService(req.params.id);
  return res.status(204).json(data);
};
