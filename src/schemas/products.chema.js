import * as yup from "yup";

const createProductSchema = yup.object().shape({
  name: yup.string().max(200).required("Name is required"),
  price: yup.number().required("Price is required"),
  category_id: yup.number().required("inform the product category"),
});

export { createProductSchema };
