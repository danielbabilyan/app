require('./app.scss');

const Vue = require('vue/dist/vue.common');
const $ = require('jquery');

const template = require('./app.html');

const page_login = require('./components/login/login');
const page_page = require('./components/page/page');

const app = new Vue({
  el: '#root',
  template,
  data: {
    page: 'login',
  },
  computed: {

  },
  components: {
    'page-login': page_login,
    'page-page': page_page,
  },
  methods: {
    click: function () {
      this.page = 'page';
    }
  },
});