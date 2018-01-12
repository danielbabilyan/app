// import files
import './profile.scss';

// require files
const template = require('./profile.html');
const side_menu = require('../side-menu/side-menu');

module.exports = {
    template,
    components: {
        'side-menu': side_menu
    }
};