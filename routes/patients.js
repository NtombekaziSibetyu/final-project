const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check')
const Patients = require('../models/Patients');

//@route POST api/patients
// register a patient
// public access
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('identityNo', 'ID number is required').isLength({min:13}),
    check('email', 'please include a valid email').isEmail(),
    check('phone','please a valid cell number').isLength({ min:10})
], 
async (req, res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
        }
        
        const { name, identityNo, email, phone, address} = req.body;

        try {
            let patient = await Patients.findOne({ identityNo })

            if(patient) {
                return res.status(400).json({ msg: 'The ID number you have entered is already registered/ belongs to someone else'})
            }

            patient = new Patients({
                name,
                identityNo,
                email,
                phone,
                address
            });

            const salt = await bcrypt.genSalt(10);

            patient.identityNo = await bcrypt.hash(identityNo, salt);

            await patient.save();

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
    }
)

//@route PUT /api/patients/
//update contact details
//@access private access
router.put('/', auth, 
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
        res.status(500).send('Server Error');
    }
});


module.exports = router;