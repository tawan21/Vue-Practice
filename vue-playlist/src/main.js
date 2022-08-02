import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.filter('to-upper', value => {
  return value.toUpperCase();
});

Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
