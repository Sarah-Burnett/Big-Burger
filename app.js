const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
	.connect(process.env.DBCONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("Mongoose connection open"))
	.catch((err) => console.log(`Connection error: ${err.message}`));

//encoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//pug middleware
app.use(express.static(__dirname + "/views"));
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "pug");

// serve client files
app.use(express.static("client/dist", { extensions: ["html"] }));

// routes
app.use("/bookings", require("./routes/bookings"));

app.use("/api/book", require("./routes/book"));
app.use("/api/booking", require("./routes/booking"));

module.exports = app;