const express = require("express");
const app = express();
const PORT = 8000;

const cors = require("cors");
app.use(cors());

// when making request from another port, we have to use cors


// app.use(cors());
const { getFromFlipkart, getFromAmazon } = require("./DataHandler");

app.post("/dataFromFlipkart", getFromFlipkart);
app.post("/dataFromAmazon", getFromAmazon);


app.listen(PORT, () => {
  console.log("server has started on: ", PORT);
}); 