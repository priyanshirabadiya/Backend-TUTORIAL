// ---------------------------- CONNECTING WITH DATABASE ----------------------------
require('dotenv').config();
const express = require("express");
const session = require('express-session')
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT;

const passport = require('passport');
require('./auth')

const server = express();
server.use(session({ secret : 'cats' }))
server.use(passport.initialize());
server.use(passport.session());

// Middleware
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// server.set('view engine' , 'ejs');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connection established success...'))
    .catch((err) => console.log(err));

server.get("/", (req, res) => {
    res.send('<a href ="auth/google">Authrntication with google</a>')
});

server.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
);

server.get('/auth/failure', (req, res) => {
    res.send('Something went wrong');
})

server.get('/protected' ,(req, res) => {
    res.send("<h1>Hello</h1>")
})

server.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure'
    })
);

server.listen(port, () => {
    console.log(`Start at  http://localhost:${port} `);
})
