const express = require("express");
const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
