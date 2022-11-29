const optimizeRouter = require('./Optimize');

function route(app) {
    app.use('/optimize', optimizeRouter);
}

module.exports = route;