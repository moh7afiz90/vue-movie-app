const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { apiURL, api_key } = require("../config.js");

// Intialize server
const app = express();
const port = 3011;

// Middlewares
app.use(json());
app.use(cors());

// Endpoints
app.get("/api/movie", (req, res, next) => {
  axios.get(`${apiURL}/movie/popular/${api_key}`).then(response => {
    res.status(200).json(response.data);
  });
});

console.log("".concat(apiURL, api_key));

app.listen(port, () => {
  console.log(`Server is live on port: ${port}`);
});
