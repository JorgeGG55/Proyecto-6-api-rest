require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/utils/db");
const championRoutes = require("./src/api/routes/champion.routes");

connectDB();
const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/champions", championRoutes);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
