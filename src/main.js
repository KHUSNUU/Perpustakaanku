import Vue from 'vue';
import App from './App.vue';
import MyLibrary from './index';

Vue.use(MyLibrary);

new Vue({
  render: h => h(App),
}).$mount('#app');