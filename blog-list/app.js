const mongoose = require('mongoose');
const cors = require('cors');
const blogRouter = require('./controllers/blogs')
const config = require('./utils/config');
const express = require('express');
const app = express()

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connecting to MongoDB');
    })
    .catch((err) => {
        console.log(`Error connection to MongoDB: ${err}`);
    });

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app;