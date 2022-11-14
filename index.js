const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log("Example app listening on port 3000!"));
