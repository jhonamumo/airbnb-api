const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExperienceSchema = new Schema({
    image: String,
    tittle: String,
    description: String,
    place: String,
    score: Number,
    users: Number,
});

const ExperienceModel = mongoose.model('experience', ExperienceSchema);

module.exports = ExperienceModel;
