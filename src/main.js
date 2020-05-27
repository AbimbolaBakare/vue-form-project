import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Vuelidate from "vuelidate";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from "axios";
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.use(VueRouter);

axios.defaults.baseURL = "https://ravesandboxapi.flutterwave.com";
axios.defaults.headers.common["Authorization"] = window.token;

axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
