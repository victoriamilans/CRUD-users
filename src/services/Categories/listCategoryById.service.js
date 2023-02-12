import database from "../../database";

export const listCategoryByIdService = async (id) => {
  const queryResponse = await database.query(
    `SELECT 
        *
    FROM
        categories
    WHERE
        categories.id = ($1);`,
    [id]
  );

  return queryResponse.rows[0];
};
