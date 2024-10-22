let {people} = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if (!name) {
        res.status(401).json({success: false, msg: 'Please provide creds'})
    }
    res.status(201).json({msg: 'success', person: name})
}

const triggerPostMan = (req, res) => {
    const {name} = req.body
    if (!name) {
        res.status(401).json({success: false, msg: 'Please provide creds'})
    }
    res.status(201).json({msg: 'success', person: name})
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
            return res.status(404).json({success: false, msg: `no person with id: ${req.params.id}`})
        }
    const newPerson = people.filter((person) => person.id !== Number(req.params.id)) 
    return res.status(200).json({success: true, data: newPerson})   
    }

module.exports = {
        getPeople,
        createPerson,
        triggerPostMan,
        updatePerson,
        deletePerson
    }
