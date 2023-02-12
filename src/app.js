import "express-async-errors";
import express from "express";
import { categoriesRouter } from "./routes/router";
import { errorHandler } from "./errors/errors";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRouter);
// app.use("/products", productsRouter);
// app.use("/products/category", productByCategory);
app.use(errorHandler);

export default app;
