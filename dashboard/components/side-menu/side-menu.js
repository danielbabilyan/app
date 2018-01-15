require('./side-menu.scss');

const template = require('./side-menu.html');
const v_link = require('../v-link/v-link');

module.exports = {
    template,
    components: {
        'v-link': v_link
    }
};