const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check')
const Booking = require('../models/Booking')

//route method:GET api/bookings get the patients bookings
router.get('/', auth,
async (req, res) => { 
    try {
        const booking = await Booking.find({ patient: req.patient});
        res.json(booking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//route method:POST api/bookings to add the patients bookings
router.post('/', auth, [
    check('type','Please specify the type of appointment').not().isEmpty(),
    check('date', 'please chose a date and time for your apointment')
], 
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


//route method:DELETE api/bookings to cancel the patients bookings
router.delete('/:id', auth,
 async (req, res) => { 
    try {
        let booking = await Booking.findById(req.params.id);

        if(!booking) return res.status(404).json({ msg: 'not found'});

        if(booking.patient !== req.patient.id) {
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