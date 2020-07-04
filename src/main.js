import Vue from 'vue'
import App from './App.vue'


import Footer from './components/Footer.vue'
import Temperatura from './components/Temperatura.vue'
import Comprimento from './components/Comprimento.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.component([
 Temperatura, Footer, Comprimento
])

new Vue({  
  render: h => h(App),
}).$mount('#app')