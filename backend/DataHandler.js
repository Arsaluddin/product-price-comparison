
// const cheerio = require("cheerio");
// const axios = require("axios");

// const getFromFlipkart = async (req, res) => {
//   const item = req.query.search;

//   try {
//     const url = `https://www.flipkart.com/search?q=${item}`;

//     const response = await axios.get(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
//       },
//     });
//     console.log(response);
//     const $ = cheerio.load(response.data);
//     const title = $('div[class="_4rR01T"]').first().text();
//     const price = $('div[class="_30jeq3 _1_WHN1"]').first().text();

//     // console.log("Title:", title);
//     // console.log("Price:", price);

//     return res.status(200).json({ title, price });
//   } catch (error) {
//     console.error("Error in getFromFlipkart:", error);
//     res.status(500).json({ error: "An error occurred." });
//   }
// };

// const getFromAmazon = async (req, res) => {
//   const item = req.query.search;

//   try {
//     const url = `https://www.amazon.com/s?k=${item}`;

//     const { data } = await axios.get(url, {
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
//       },
//     });
    
//     const $ = cheerio.load(data);
//     const title = $('span[class="a-size-medium a-color-base a-text-normal"]').first().text();

//     const priceElement = $('span[class="a-offscreen"]').first();
//     const price = priceElement.text().trim();

//     // console.log("Title:", title);
//     // console.log("Price:", price);

//     return res.status(200).json({ title, price });
//   } catch (error) {
//     console.error("Error in getFromAmazon:", error);
//     res.status(500).json({ error: "An error occurred." });
//   }
// };

// module.exports = { getFromFlipkart, getFromAmazon };


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
    const products = [];

    $('div[data-id]').each((index, element) => {
      const title = $(element).find('a[rel="noopener noreferrer"]').attr('title');
      const price = $(element).find('div[class="_30jeq3"]').text();
      const image = $(element).find('img[class="_396cs4"]').attr('src');
      const rating = $(element).find('div[class="_3LWZlK"]').text();
      const description = $(element).find('a[rel="noopener noreferrer"]').text().trim();

      products.push({ title, price, image, rating, description });
    });

    return res.status(200).json(products);
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
    const products = [];

    $('div[data-asin]').each((index, element) => {
      const title = $(element).find('span[class="a-size-medium a-color-base a-text-normal"]').text();
      const price = $(element).find('span[class="a-offscreen"]').first().text().trim();
      const image = $(element).find('img[class="s-image"]').attr('src');
      const rating = $(element).find('span[class="a-icon-alt"]').text();
      const description = $(element).find('span[class="a-size-base-plus a-color-base a-text-normal"]').text().trim();

      products.push({ title, price, image, rating, description });
    });

    return res.status(200).json(products);
  } catch (error) {
    console.error("Error in getFromAmazon:", error);
    res.status(500).json({ error: "An error occurred." });
  }
};

module.exports = { getFromFlipkart, getFromAmazon };

