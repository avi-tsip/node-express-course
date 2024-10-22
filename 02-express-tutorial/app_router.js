const express = require('express');
const app = express();
const people_router = require('./routes/people');
const auth_router = require('./routes/auth');

// Get static assets
app.use(express.static('./methods-public'))

// Parse post data
app.use(express.urlencoded({extended: false}))

// Parse json
app.use(express.json())

app.use('/api/people', people_router)

app.use('/login', auth_router)

app.listen(5000, () => {
    console.log('Server is running on port 5000....')
})