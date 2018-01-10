// import files
import Vue from 'vue/dist/vue.esm.js';
import './global/index.scss';

// require files
const template = require('./app.html');
const home = require('./home/home');

new Vue ({
    el: '#root',
    template,
    data: function() {
        return {
            currentView: 'home'
        }
    },
    components: {
        'home': home
    }
});