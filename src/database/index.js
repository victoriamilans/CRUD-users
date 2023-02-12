import pkg from "pg";
const { Client } = pkg;
import "dotenv/config";

const database = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export const startDatabase = async () => {
  await database.connect();
  console.log("database conectada");
};

export default database;
