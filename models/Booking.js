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
        default: Date.now
    }
});


module.exports = mongoose.model('booking', BookingSchema);