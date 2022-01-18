import express from "express";

const app = express();

const PORT = 3333;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Olá mundo",
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
