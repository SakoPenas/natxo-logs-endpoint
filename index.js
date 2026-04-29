const express = require("express");
const app = express();

app.use(express.json());

app.post("/logs", (req, res) => {
  console.log("LOG RECIBIDO:", req.body);
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.send("Natxo Logs Endpoint activo");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor escuchando en puerto " + port);
});
