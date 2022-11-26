const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;
const route = require('./routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('RESTfull API successfully called');
});

route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});