import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import router from './router'
import store from './store'
import App from './App.vue'
//zyeda mte3 video la3chya
/* import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios) */

// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

//+++ bootstarp
import 'bootstrap/dist/css/bootstrap.min.css'


// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
