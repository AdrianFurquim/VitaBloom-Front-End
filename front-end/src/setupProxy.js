const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/vitabloom', createProxyMiddleware({
        target: 'https://localhost:8443',
        secure: false, // Ignora verificações de certificado SSL
        changeOrigin: true,
        // Você pode adicionar outras opções de configuração, se necessário
    }));
};