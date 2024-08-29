const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const path = require('path'); 
const port = process.env.PORT;
const userRoutes = require('./routes/user.routes');
const ejs = require('ejs');

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connection established successfully...'))
    .catch((err) => console.log(err));


app.get("/", userRoutes);

app.use('/user', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
