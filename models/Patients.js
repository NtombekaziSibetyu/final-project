const mongoose = require('mongoose');
PatientsSchema =mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    identityNo:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('patients', PatientsSchema);