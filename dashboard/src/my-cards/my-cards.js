document.title = 'Dashboard - My Cards';

require('./my-cards.scss');
const template = require('./my-cards.html');
const side_menu = require('../../components/side-menu/side-menu');

module.exports = {
    template,
    components: {
        'side-menu': side_menu
    }
};