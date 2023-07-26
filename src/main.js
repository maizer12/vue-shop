import { createApp } from 'vue'
import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

const app = createApp(App)

app.use(store).mount('#app')
