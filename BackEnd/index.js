const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(cors());
require("./database/connection");
dotenv.config({ path: "./config.env" });
app.use(express.json());
app.use(require("./Routes/auth"));
const PORT = process.env.PORT;

app.listen(PORT);
