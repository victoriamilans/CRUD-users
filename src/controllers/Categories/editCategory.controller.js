import { editCategoryByIdService } from "../../services/Categories/editCategory.service";

export const editCategoryController = async (req, res) => {
  const data = await editCategoryByIdService(req.params.id, req.body);

  return res.status(200).json(data);
};
