const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = 4000;

// Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// Connect DB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, () => console.log("mongoDB connected"));

// Middleware
app.use(express.json()); // This is the body parser.

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`server running on port ${port}`));
