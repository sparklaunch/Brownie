const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://43.201.129.192",
      changeOrigin: true
    })
  );
  app.use(
    "/ela",
    createProxyMiddleware({
      target: "https://api.elasolution.com",
      changeOrigin: true
    })
  );
};
