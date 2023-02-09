const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/ela", {
      target: "https://api.elasolution.com",
      changeOrigin: true,
      pathRewrite: {
        "^/ela": ""
      }
    })
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://43.201.129.192",
      changeOrigin: true
    })
  );
};
