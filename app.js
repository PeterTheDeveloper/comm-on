const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

// const host = '127.0.0.1';

const router = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use(router);

app.listen(port, () => console.log(`Server listnening on port ${port}...`));
