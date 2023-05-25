import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import debounce from 'v-debounce'
import vClickOutside from 'v-click-outside'

Vue.config.productionTip = false

Vue.use(debounce);
Vue.use(vClickOutside);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
