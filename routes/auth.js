const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check')
const Patients = require('../models/Patients');


//route GET api/auth
// login a patient
// private access
router.get('/', auth, async (req, res) => { 
   try {
       const patient = await Patients.findById(req.patient.id).select('-identityNo');
       res.json(patient);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server error')
   }    
});

//route PUT api/auth
// edit the patients information
// private access
router.put('/:id', 
async (req, res) => { 
    const { name, email, phone, address} = req.body;

    // Build patient object
    const patientFields = {};

    if(name) patientFields.name = name;
    if(email) patientFields.email = email;
    if(phone) patientFields.phone = phone;
    if(address) patientFields.address = address;

    try {
        let patient = await Patients.findById(req.params);

        if(!patient) return res.status(404).json({ msg: 'Patient not found'});

        
        if(patient.toString() !== req.patient) {
            return res.status(401).json({ msg: 'Not authorized'});
        }
        contact = await Patients.findOneAndUpdate(req.params, 
            {$set: patientFields},
            { new: true});

            res.json(patient); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error,');
    }
});


//route POST api/auth
// auth patient and get token
// public access
router.post('/',
[
    check('name','Please enter a valid full name').not().isEmpty(),
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