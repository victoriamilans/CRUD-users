import database from "../../database";

export const editCategoryByIdService = async (id, body) => {
  const queryResponse = await database.query(
    `
    UPDATE 
        categories 
    SET 
        name = ($1)
    WHERE
       categories.id = ($2) 
    RETURNING*;`,
    [body.name, id]
  );

  return queryResponse.rows[0];
};
