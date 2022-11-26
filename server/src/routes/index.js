const testRouter = require('./test');

function route(app) {
    app.use('/test', testRouter);
}

module.exports = route;