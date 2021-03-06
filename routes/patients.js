const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check')
const Patient = require('../models/Patients');

//route api/patients method:POST to register a patient
router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('identityNo', 'ID number is required').isLength({min:13}),
    check('email', 'please include a valid email').isEmail(),
    check("password",'Please enter a password with atleast 6 characters').isLength({min:8}),
    check('phone','please enter a valid cell number').isLength({ min:10})
], 
async (req, res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
        }
        
        const { name, identityNo, email, password, phone, address} = req.body;

        try {
            let patient = await Patient.findOne({ identityNo })
            //check if the patient already exist in the database
            if(patient) {
                return res.status(400).json({ msg: 'The ID number you have entered is already registered/ belongs to someone else'})
            }
            //create the patient
            patient = new Patient({
                name,
                identityNo,
                email,
                password,
                phone,
                address
            });

            const salt = await bcrypt.genSalt(10);

            patient.password = await bcrypt.hash(password, salt);

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
                res.json({ token })
            })

        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
)



module.exports = router;