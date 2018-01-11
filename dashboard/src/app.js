// import files
import Vue from 'vue/dist/vue.esm.js';
import './global/index.scss';

// require files
const template = require('./app.html');
const side_menu = require('./side-menu/side-menu');
const home = require('./home/home');
const profile = require('./profile/profile');

new Vue ({
    el: '#root',
    template,
    data: function() {
        return {
            currentRoute: '/dashboard/home',
            currentRoutee: window.location.pathname
        }
    },
    components: {
        '/dashboard/home': home,
        '/dashboard/profile': profile
    }
});