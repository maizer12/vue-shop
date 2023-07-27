import { createApp } from 'vue'
import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import router from './router'

const app = createApp(App)

app.use(router).use(store).mount('#app')
