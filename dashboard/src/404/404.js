// import files
import './404.scss';

// require files
const template = require('./404.html');
const side_menu = require('../side-menu/side-menu');

module.exports = {
    template,
    components: {
        'side-menu': side_menu
    }
};