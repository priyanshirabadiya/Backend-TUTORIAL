const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
port = process.env.PORT;
const userRoutes = require('./routes/user.routes')

// middlewares
app.use(express.json());
app.use(express.urlencoded());


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connection established success...'))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

app.use('/user', userRoutes)


app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})