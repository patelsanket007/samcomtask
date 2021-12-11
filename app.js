require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const DBURL = process.env.DBURL;


// Middleware use for the parsing the data.
app.use(express.json());

// Integrating our API routes.
app.use('/api', require('./routes'));

// Connection to the mongodb database.(Note: I am using my mongodb live cluster so I removed my DBURL).

mongoose.connect(DBURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('DB Connected!!');
}).catch((err) => {
    console.log(`Error while connecting to the DB: ${ err.message }`);
});

// Server connection

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error while connecting to the server: ${ err }`);
    } else {
        console.log(`Server is running and up on PORT: ${ PORT }`);
    }
});