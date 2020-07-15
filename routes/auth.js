const express = require('express');
const router = express.Router();

//route GET api/auth
// login a patient
// private access
router.get('/', (req, res) => { res.send(req.body) });

//route PUT api/auth
// edit the patients information
// private access
router.put('/:id', (req, res) => { res.send(req.body) });


//route POST api/auth
// auth patient and get token
// public access
router.post('/', (req, res) => { res.send(req.body) });

module.exports = router;