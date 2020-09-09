const { findAllExperiences, findExperiences, findTop5Experiences } = require('./../businessLogic/experiencesBL');
const { json } = require('express');

const all = (req, res) => {
    const response = findAllExperiences();
    res.json(response);
}

const top5 = (req, res) => {
    const response = findTop5Experiences();
    res.json(response);
}

const detail = (req, res) => {
    const { id } = req.params;
    try{
        const response = findExperiences(id);
        res.json(response);
    }catch(error){
        res.status(404).send(error);
    }
}

module.exports = {
    all,
    top5,
    detail
}
