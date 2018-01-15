require('./app.scss');

const Vue = require('vue/dist/vue.common');
const $ = require('jquery');
const routes = require('./routes');

const app = new Vue({
  el: '#root',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
      ViewComponent () {
          const matchingView = routes[/(\w+)\/?(\w+)?/.exec(this.currentRoute)[2]]
          return matchingView
          ? require('./' + matchingView + '/' + matchingView)
          : require('./404/404')
      }
  },
  render (h) {
    return h(this.ViewComponent)
  }
});
  
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});