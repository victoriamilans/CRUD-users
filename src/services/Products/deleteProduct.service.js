import database from "../../database";

export const deleteProductService = async (id) => {
  const queryResponse = await database.query(
    `
    DELETE FROM 
        products
    WHERE 
        products.id = ($1);`,
    [id]
  );
};
