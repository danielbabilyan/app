// import files
import './global/index.scss';

// require files
const template = require('./app.html');
const continer_example = require('./continer-example/continer-example');

new Vue ({
    el: '#root',
    template,
    components : {
        'continer-example': continer_example,
    }
});