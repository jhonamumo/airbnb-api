const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
    idReserva: String,
    nombre: String,
    telefono: String,
    correo: String,
});

const BookingModel = mongoose.model('booking', BookingSchema);

module.exports = BookingModel;
