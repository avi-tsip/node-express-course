const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

// req => middleware => res

// use vs route
// options - made by us / express / third party

// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const date = new Date().toString();
//     console.log(method, url, date)
//    0// one option with middleware is to send the data ourselves in the middleware with: res.send('Testing')
//    // or pass the responsibility to the next function with next
//    next()
// }

// But the best practice is to move function to a new file
// Now I have to add the middle ware to all routes like this: app.get("/", logger, (req, res) => {
// But there is a different way: app.use

//app.use('/api', logger) // using app.use like this will aplly it only to routes that begin with /api

app.use(morgan('tiny')) // needs to be at the top so all routes will be able to use it, also note they will be executed in the order they appear in the list

app.get("/", (req, res) => {

    res.send('home')
})

app.get("/about", [logger, authorize], (req, res) => { // usage of a middleware per route
    console.log(req.user);
    res.send('about');
})

app.get("/api/products", (req, res) => {
    res.send('products')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000....')
})