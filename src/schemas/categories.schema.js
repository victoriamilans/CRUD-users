import * as yup from "yup";

export const createCategorySchema = yup.object().shape({
  name: yup.string().max(200).required("Name is required"),
});

export const editCategorySchema = yup.object().shape({
  name: yup.string().max(200).required("Name is required"),
});

export const validIdSchema = yup.object().shape({
  id: yup.number(),
});
