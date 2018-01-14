import './profile.scss';
const template = require('./profile.html');
const side_menu = require('../components/side-menu/side-menu');

module.exports = {
    template,
    components: {
        'side-menu': side_menu
    }
};