const mongoose = require('mongoose');

const url = 'mongodb+srv://db_airbnbapp:app*2020@cluster0.0zbib.mongodb.net/db_cloneairbnbapp?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', () => console.error('Error connecting with database') );
db.once('open', () => console.log('Connection with mongo sucess') );

module.exports = db;
