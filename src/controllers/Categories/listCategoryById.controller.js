import { listCategoryByIdService } from "../../services/Categories/listCategoryById.service";

export const listCategoryByIdController = async (req, res) => {
  const data = await listCategoryByIdService(req.params.id);

  return res.status(200).json(data);
};
