const { findAllBooking, putReserveBooking } = require('./../businessLogic/bookingBL');

const all = (req, res) => {
    //const response = findAllBooking();
    //res.send(response);
    res.send('Ok all');
}

const reserve = async (req, res) => {
    try {
        const response = await putReserveBooking(req.body);
        res.json(response);
    } catch (error) {
        res.status(404).send(error);
    }
}

module.exports = {
    all,
    reserve
}
