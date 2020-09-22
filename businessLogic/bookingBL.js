const BookingModel = require('./../models/bookingModel');

const findAllBooking = () => {
}

const putReserveBooking = async ({name, phone, email, booking_date, experience_id}) => {
    const bookingData = {
        name,
        phone,
        email,
        booking_date,
        experience_id
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
