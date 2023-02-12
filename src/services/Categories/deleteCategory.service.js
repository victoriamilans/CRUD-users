import database from "../../database";

export const deleteCategoryByIdService = async (id) => {
  const queryResponse = await database.query(
    `
    DELETE FROM 
        categories 
    WHERE 
        categories.id = ($1);`,
    [id]
  );
};
