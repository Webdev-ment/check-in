const mongoose = require('mongoose');



const appointmentSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    FirstName: { type: String, required: true},
    LastName: { type: String,  required: true },
    patientEmail: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phoneNumber: { type: String,  required: true },
    address: { type: String,  default: true },
    procedure: {type: String, required: true},
    facility: {type: Boolean, required: true},
    appDate: {type: Date, required: true},
    appTime: {type: String, required: true}

});

module.exports = mongoose.model('appointment', appointmentSchema);
