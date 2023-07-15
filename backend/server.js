const express = require("express");
const app = express();
const PORT = 3000;

// when making request from another port, we have to use cors
const cors = require('cors')

app.use(cors());
const { getFromFlipkart, getFromAmazon } = require("./DataHandler");

app.post("/dataFromFlipkart", getFromFlipkart);
app.post("/dataFromAmazon", getFromAmazon);


app.listen(PORT, () => {
  console.log("server has started on: ", PORT);
}); 