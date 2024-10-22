const express = require('express');
const router = express.Router();
const  {
    getPeople,
    createPerson,
    triggerPostMan,
    updatePerson,
    deletePerson
} = require('../controllers/people')

router.get('/', (getPeople))

// Another option to set the route is: router.route('/').get(getPeople)

router.post('/:id', (createPerson))

router.post('/postman', (triggerPostMan))

router.put('/:id', (updatePerson))

router.delete('/:id', (deletePerson))

// Another way is to chain routes with same base url 
// router.route('/:id').post(createPerson).put(updatePerson).delete(deletePerson)

module.exports = router;