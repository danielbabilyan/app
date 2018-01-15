document.title = 'Dashboard - Company Settings';

require('./company-settings.scss');

const template = require('./company-settings.html');
const side_menu = require('../../components/side-menu/side-menu');

module.exports = {
    template,
    components: {
        'side-menu': side_menu
    }
};