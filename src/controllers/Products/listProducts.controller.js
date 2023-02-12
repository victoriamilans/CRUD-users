import { listProductsService } from "../../services/Products/listProducts.service";

export const listProductsController = async (req, res) => {
  const data = await listProductsService();

  return res.status(200).json(data);
};
