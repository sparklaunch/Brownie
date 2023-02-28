const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");

const startServer = async () => {
  const app = express();
  app.use(express.static(path.join(__dirname, "react-app")));
  app.enable("trust proxy");
  app.use((req, res, next) => {
    if (req.secure) {
      next();
    } else {
      res.redirect("https://" + req.headers.host + req.url);
    }
  });
  app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "react-app", "index.html"));
  });
  const httpsServer = https.createServer(
    {
      key: fs.readFileSync("funphonics.ai_2023021567908.key.pem"),
      cert: fs.readFileSync("funphonics.ai_2023021567908.crt.pem")
    },
    app
  );
  await new Promise((resolve) => {
    httpsServer.listen(443, () => {
      console.log("HTTPS Server running on port 443");
      resolve();
    });
  });
};

startServer();
