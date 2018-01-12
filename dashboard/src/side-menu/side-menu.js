// import files
import './side-menu.scss';

// require files
const template = require('./side-menu.html');
const v_link = require('../v-link/v-link');

module.exports = {
    template,
    components: {
        'v-link': v_link
    }
};