import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-d09eb.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST'){
    request.method = 'PUT';
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
