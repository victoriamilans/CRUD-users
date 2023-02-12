import database from "../../database";

export const listProductByIdService = async (id) => {
  const queryResponse = await database.query(
    `
    SELECT
      *
    FROM
      products
    WHERE
      id = $1;
    `,
    [id]
  );

  return queryResponse.rows[0];
};
