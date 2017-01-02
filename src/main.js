// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMat from 'vue-material';
import App from './App.vue';
/* eslint-disable no-new */

Vue.use(VueMat);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})
		
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
