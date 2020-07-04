import Vue from 'vue'
import App from './App.vue'


import Footer from './components/Footer.vue'
import Title from './components/Title.vue'
import Temperatura from './components/Temperatura.vue'
import Massa from './components/Massa.vue'
import Comprimento from './components/comprimentos/Comprimento.vue'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.component([
 Temperatura, Footer, Comprimento, Massa, Title
])

new Vue({  
  render: h => h(App),
}).$mount('#app')
