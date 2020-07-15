const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check')
const Patients = require('../models/Patients');


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
router.post('/',
[
    check('name','Please enter aa valid full name').not().isEmpty(),
    check('identityNo','Please enter a valid identity number').exists()
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
        }

    const {name, identityNo } = req.body;

    try {
        let patient = await Patients.findOne({ name });

        if(!patient){
            return res.status(400).json({msg:'invalid credentials'});
        }

        const isMatch = bcrypt.compare(identityNo, patient.identityNo);

        if(!isMatch){
            return res.status(400).json({msg:'invalid credentials'})
        }
        const payload = {
            patient: {
                id: patient.id
            }
        }

        jwt.sign( payload, config.get('jwtSecret'),{
            expiresIn:360000
        }, 
        (err, token) => {
            if(err) throw err;
            res.json({token})
        })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }

});

module.exports = router;