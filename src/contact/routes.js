const { Router } = require('express');
const controller = require('./controller')

const router = Router();

//Get all acontacts:

// router.get('/', () => controller.getContacts(req, res));
// The above can be written as the below becasue express knows what to do:


router.get('/', controller.getContacts);

// Get contact by id:

router.get('/:id', controller.getContactById)

module.exports = router; 