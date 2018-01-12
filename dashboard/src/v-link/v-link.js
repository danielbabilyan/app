// require files
const template = require('./v-link.html');

import routes from '../routes';

module.exports = {
    template,
    props: {
        href: {
            type:String,
            required: true 
        }
    },
    methods: {
        go (event) {
            event.preventDefault();
            this.$root.currentRoute = this.href;
            window.history.pushState(null, "", this.href);
        }
    }
};