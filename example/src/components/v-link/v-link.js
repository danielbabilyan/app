const template = require('./v-link.html');

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