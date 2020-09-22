const BookingModel = require('./../models/bookingModel');

const findAllBooking = () => {
}

const putReserveBooking = async ({name, phone, email, bookingDate}) => {
    const bookingData = {
        name,
        phone,
        email,
        bookingDate
    }

    try {
        await BookingModel(bookingData).save();
        return 'successful booking';
    } catch (err) {
        return `fail booking ${err}`;
    }
}

module.exports = {
    findAllBooking,
    putReserveBooking
}
