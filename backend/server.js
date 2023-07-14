const express = require("express");
const app = express();
const PORT = 8000;

const { getFromFlipkart, getFromAmazon } = require("./DataHandler");

app.post("/dataFromFlipkart", getFromFlipkart);
app.post("/dataFromAmazon", getFromAmazon);

app.listen(PORT, () => {
  console.log("server has started on: ", PORT);
});
