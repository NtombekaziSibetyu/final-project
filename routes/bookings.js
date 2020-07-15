const express = require('express');
const router = express.Router();

//route GET api/bookings
// get the patients bookings
// private access
router.get('/', (req, res) => { res.send(req.body) });

//route POST api/bookings
// add the patients bookings
// private access
router.post('/', (req, res) => { res.send(req.body) });


//route DELETE api/bookings
// cancel the patients bookings
// private access
router.delete('/:id', (req, res) => { res.send(req.body) });

module.exports = router;