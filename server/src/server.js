const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;
const route = require('./routes');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
    res.send('RESTfull API successfully called');
});

route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});