import './assets/main.css'

import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@emailjs/browser'

createApp(App).use(router).mount('#app')