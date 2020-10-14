const Obserser = require('./services/observer');

const obserser = new Obserser();

const folder = 'logs';

obserser.on('file-added', log => {
    // print error message to console
    console.log(log.message);
});

obserser.watchFolder(folder);