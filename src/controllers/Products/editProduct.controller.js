import { editProductService } from "../../services/Products/editProduct.service";

export const editProductController = async (req, res) => {
  const data = await editProductService(req.params.id, req.body);

  return res.status(200).json(data);
};
