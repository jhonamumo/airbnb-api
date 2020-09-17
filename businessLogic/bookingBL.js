const fs = require('fs');
let data = '';

const findAllBooking = () => {
    let readableStream = fs.createReadStream(__dirname+'./../repository/reserve.txt');
    readableStream.setEncoding('UTF8');
    readableStream.on('data', ( chunk ) => {
        data += chunk;
    });
    
    data = readableStream.on('end', ( ) => {
        return data.toString();
    });

    console.log('Hola '+data.toString()+" Fin");
}

const putReserveBooking = ({nombre, correo, fecha, telefono}) => {
    let writeableStream = fs.createWriteStream(__dirname+'./../repository/reserve.txt');
    writeableStream.write(`nombre: ${nombre} \ncorreo: ${correo} \nfecha: ${fecha} \ntelefono: ${telefono}`, 'UTF8');
    writeableStream.close();
    return 'Se realiza la reserva';
}

module.exports = {
    findAllBooking,
    putReserveBooking
}
