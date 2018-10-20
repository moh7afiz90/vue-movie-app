const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { api_URL, api_key } = require("../config.js");

// Intialize server
const app = express();
const port = 3011;

// Middlewares
app.use(json());
app.use(cors());

// Endpoints
app.get("/api/movie", (req, res, next) => {
  axios.get(`${api_URL}/movie/popular/${api_key}`).then(response => {
    res.status(200).json(response.data);
  });
});
app.get("/api/tv", (req, res, next) => {
  axios
    .get(`${api_URL}/tv/popular/${api_key}&language=en-US&page=1`)
    .then(response => {
      res.status(200).json(response.data);
    });
});

console.log("".concat(api_URL, api_key));

app.listen(port, () => {
  console.log(`Server is live on port: ${port}`);
});
