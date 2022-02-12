const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const { PORT, LOCAL_ADDRESS } = process.env;

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

app.listen(PORT, LOCAL_ADDRESS, () => {
  const address = server.address();
  console.log(`server running on port`, address);
});
