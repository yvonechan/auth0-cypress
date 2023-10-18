import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import {type state} from './types'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state: state) {
      state.count++
    }
  }
})
const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
