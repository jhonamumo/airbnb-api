const { Date } = require('mongoose');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    }
});

const BookingModel = mongoose.model('booking', BookingSchema);

module.exports = BookingModel;
