const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "react-app")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "react-app", "index.html"));
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
