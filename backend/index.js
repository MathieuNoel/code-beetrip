require('dotenv').config();

const bodyParser = require('body-parser');

const express = require('express');

const cors = require('cors');

const app = express();

const router = require('./router');

const port = process.env.PORT || `8080`;

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.use(express.static('frontend'));

app.use(express.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router);

app.listen(port, () => {
   console.log(`http://localhost:${port}`);
});