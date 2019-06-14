const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const { db } = require('./config');
const router = require('./routes');

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());
app.use(router);
app.use(cors());

mongoose.connect(db.url, { useNewUrlParser: true});
const mongo = mongoose.connection;

mongo.on('error', (error) => console.log('Failed to connect tomongo', error))
  .once('open', () => console.log('Connected to mongo'));

module.exports = app;
