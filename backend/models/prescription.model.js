const mongoose = require('mongoose');



const prescriptionSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    Medicine: { type: String, required: true},
    Dosage: { type: String,  required: true },
    patientEmail: {type: String, required: true}

});

module.exports = mongoose.model('prescription', prescriptionSchema);
