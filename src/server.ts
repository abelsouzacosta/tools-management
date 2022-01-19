import "reflect-metadata";
import { router } from "@routes/tools.routes";
import express from "express";

import "./database";
import "./shared/container";

const app = express();

const PORT = 3333;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Olá mundo",
  });
});

app.use(express.json());

app.use("/tools", router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
