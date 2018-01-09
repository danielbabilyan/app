// import files
import './global/index.scss';

// require files
const template = require('./app.html');
const side_menu = require('./side-menu/side-menu');
const page_content = require('./page-content/page-content');

new Vue ({
    el: '#root',
    data: function () {
        return {
            'page-content-load-file': ''
        }
    },
    template,
    components : {
        'side-menu': side_menu,
        'page-content': page_content,
    }
});