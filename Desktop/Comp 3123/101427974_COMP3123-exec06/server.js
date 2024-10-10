const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Replace this with your actual MongoDB connection string
const DB_URL = "mongodb+srv://101427974:<db_password>@cluster0.hr7uu.mongodb.net/lab06?retryWrites=true&w=majority&appName=Cluster0"; // Update this line

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to the database mongoDB Atlas Server");
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

// Define your API routes here

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
