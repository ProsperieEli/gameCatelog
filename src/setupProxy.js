const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'https://api.igdb.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/v4' // rewrite /api to /v4 in the request path
    },
    headers: {
      'Client-ID': 'pcsvbav1k1g4x68fqj1nu4efnywxkw',
      Authorization: 'Bearer soosh4m1v5bylb7o6j6v3rpo0g0y3k',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }));
};
