const { findAllBooking, putReserveBooking } = require('./../businessLogic/bookingBL');

const all = (req, res) => {
    const response = findAllBooking();
    res.send(response);
}

const reserve = (req, res) => {
    const response = putReserveBooking();
    res.send(response);
}

module.exports = {
    all,
    reserve
}
