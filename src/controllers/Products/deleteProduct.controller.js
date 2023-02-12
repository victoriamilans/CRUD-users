import { deleteProductService } from "../../services/Products/deleteProduct.service";

export const deleteProductController = async (req, res) => {
  const data = await deleteProductService(req.params.id);
  return res.status(204).json(data);
};
