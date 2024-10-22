const express = require('express');
const app = express();
let {people} = require('./data');

// Get static assets
app.use(express.static('./methods-public'))

// Parse post data
app.use(express.urlencoded({extended: false}))

// Parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if (!name) {
        res.status(401).json({success: false, msg: 'Please provide creds'})
    }
    res.status(201).json({msg: 'success', person: name})
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id ===Number(id))
    if (!person) {
            return res.status(404).json({success: false, msg: `no person with id: ${id}`})
        }
    const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
        person.name = name;
    }
    return person   
    })
    res.status(200).json({success: true, data: newPerson})
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
            return res.status(404).json({success: false, msg: `no person with id: ${req.params.id}`})
        }
    const newPerson = people.filter((person) => person.id !== Number(req.params.id)) 
    return res.status(200).json({success: true, data: newPerson})   
    })


app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}!`)
    } 
    res.status(401).send('Please provide creds')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000....')
})