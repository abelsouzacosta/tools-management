import "reflect-metadata";
import errorHandler from "@middlewares/MiddlewareError";
import { router } from "@routes/tools.routes";
import express from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";

import swaggerFile from "./swagger.json";

import "./database";
import "@container/index";

const app = express();

const PORT = 3333;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Olá mundo",
  });
});

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/tools", router);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
