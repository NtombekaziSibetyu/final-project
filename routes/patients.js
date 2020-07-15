const express = require('express');
const router = express.Router();
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
], (req, res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
        }
        res.send('passed')
    }
)
module.exports = router;