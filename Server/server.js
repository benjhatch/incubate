const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

//routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profiles', require('./routes/api/profiles'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));