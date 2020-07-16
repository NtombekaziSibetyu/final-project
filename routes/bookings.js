const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check')
const Patients = require('../models/Patients');
const Booking = require('../models/Booking')

//route GET api/bookings
// get the patients bookings
// private access
router.get('/', auth, 
async (req, res) => { 
    try {
        const booking = await Booking.find({ patient: req.patient.id}).sort({ date:-1 });
        res.json(booking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//route POST api/bookings
// add the patients bookings
// private access
router.post('/', [ auth, [
    check('type','Please specify the type of appointment').not().isEmpty(),
    check('date', 'please chose a date and time for your apointment')
]], 
async (req, res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
        }

    const { type, date } = req.body;

    try {
        const newBooking = new Booking({
            type,
            date,
            patient: req.patient.id
        })

        const booking = await newBooking.save();

        res.json(booking);

    } catch (err) {
        console.error(err.mesage);
        res.status(500).send('Server error');
    }

});


//route DELETE api/bookings
// cancel the patients bookings
// private access
router.delete('/:id', auth,
 async (req, res) => { 
    try {
        let booking = await Booking.findById(req.params.id);

        if(!booking) return res.status(404).json({ msg: 'Contact not found'});

        // Make sure user owns contact
        if(booking.patient.toString() !== req.patient.id) {
            return res.status(401).json({ msg: 'Not authorized'});
        }

        await Booking.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Appointment cancelled'});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
 });

module.exports = router;