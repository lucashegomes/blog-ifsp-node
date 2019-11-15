const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Starting app
const app = express();

//Allows create / edit by URL json sent
app.use(express.json());

//Enabling cors
app.use(cors());

//Config database connection
mongoose.connect(
    'mongodb+srv://blog:blog@blog-ifsp-p11oh.mongodb.net/test?retryWrites=true&w=majority', 
    { useUnifiedTopology: true, useNewUrlParser: true }
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);
