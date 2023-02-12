import { listProductsByCategoryIdService } from "../../services/Products/listProductByCategoryId.service";

export const listProductsByCategoryIdController = async (req, res) => {
  const data = await listProductsByCategoryIdService(req.params.id);

  return res.status(200).json(data);
};
