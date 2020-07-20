const mongoose = require('mongoose');
const BookingSchema = mongoose.Schema({
    patient :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients'
    },
    type:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('booking', BookingSchema);