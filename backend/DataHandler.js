
 


const cheerio = require("cheerio");
const axios = require("axios");

const getFromFlipkart = async (req, res) => {
  const item = req.query.search;

  try {
    const url = `https://www.flipkart.com/search?q=${item}`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      },
    });

    const $ = cheerio.load(response.data);
    const title = $('div[class="_4rR01T"]').first().text();
    const price = $('div[class="_30jeq3 _1_WHN1"]').first().text();

    console.log("Title:", title);
    console.log("Price:", price);

    return res.status(200).json({ title, price });
  } catch (error) {
    console.error("Error in getFromFlipkart:", error);
    res.status(500).json({ error: "An error occurred." });
  }
};

const getFromAmazon = async (req, res) => {
  const item = req.query.search;

  try {
    const url = `https://www.amazon.com/s?k=${item}`;

    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      },
    });

    const $ = cheerio.load(data);
    const title = $('span[class="a-size-medium a-color-base a-text-normal"]').first().text();

    const priceElement = $('span[class="a-offscreen"]').first();
    const price = priceElement.text().trim();

    console.log("Title:", title);
    console.log("Price:", price);

    return res.status(200).json({ title, price });
  } catch (error) {
    console.error("Error in getFromAmazon:", error);
    res.status(500).json({ error: "An error occurred." });
  }
};

module.exports = { getFromFlipkart, getFromAmazon };
