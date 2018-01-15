import './404.scss';
const template = require('./404.html');
const side_menu = require('../../components/side-menu/side-menu');

module.exports = {
    template,
    components: {
        'side-menu': side_menu
    }
};