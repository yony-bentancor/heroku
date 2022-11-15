const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/home.html")));

app.listen(PORT, () => console.log("Example app listening on port 3000!"));
