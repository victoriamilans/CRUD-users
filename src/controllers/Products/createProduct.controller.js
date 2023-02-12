import { createProductService } from "../../services/Products/createProduct.service";

export const createProductController = async (req, res) => {
  const data = await createProductService(req.validatedBody);

  return res.status(201).json(data);
};
