const {getJestProjects} = require('@nrwl/jest');

module.exports = {
    projects: getJestProjects(),
    setupFiles: ['jest-canvas-mock'],
};
