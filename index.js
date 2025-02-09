const express = require("express");
require("dotenv").config();
require("./models/config");
const cors = require("cors");
const router = require("./routes/mainRouter");

const app = express();

const allowedOrigins = [
  "https://your-frontend.onrender.com", // Update with your frontend Render URL
  "http://localhost:3000", // Allow local frontend for development
];

app.use(cors({
  origin: allowedOrigins,
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
}));

app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.use("/", router);

const server = app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on ${process.env.PORT}`);
});

module.exports = server;
