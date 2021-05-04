const express = require("express");
const cors = require("cors");
const services = require("./services");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/api", services);

app.listen(port, () => console.info(" 🚀 Server is running: ", port));

app.on("error", (error) =>
  console.info(" ❌ Server is not running due to : ", error)
);
