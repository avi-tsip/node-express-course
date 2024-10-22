const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./navbar-app/static'))

// The correct way is no to use sendFile
// app.get('/', (req, res)=> {
//     res.sendFile(path.resolve(__dirname, 'navbar-app/index.html'))
// })
//  But use one of these options:
//  1. put index.html into the static library
//  2. SSR - server side randering

app.all('*', (req, res)=> {
    res.status(404).send('Resource not found')
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})

