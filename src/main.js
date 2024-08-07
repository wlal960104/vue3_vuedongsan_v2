import { createApp } from 'vue'
import App from './App.vue'
// 부트스트랩 v5.3.3
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'

createApp(App).use(router).mount('#app')
