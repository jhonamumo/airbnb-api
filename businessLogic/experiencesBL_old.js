const EXPERIENCES = require('./../repository/experienceRepository');

const findAllExperiences = () => {
    return { experiences: EXPERIENCES }
}

const findTop5Experiences = () => {
    const experiencesSort = EXPERIENCES.sort((a, b) => {
        if(a.score < b.score)
            return 1;
        if(a.score > b.score)
            return -1;
        return 0;
    });
    const top5Experiences = experiencesSort.slice(0, 5);
    return { top5: top5Experiences };
}

const findExperiences = ( id ) => {
    const experiences = EXPERIENCES.find( el => Number(id) === el.id );
    if(experiences === undefined) throw('not found');
    return { experiences: experiences }; // { experiences }
}

module.exports = {
    findAllExperiences,
    findTop5Experiences,
    findExperiences
}
