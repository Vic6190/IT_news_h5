import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Tab, Tabs, Divider, showToast, List } from 'vant'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import '../src/assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button)
app.use(Tab)
app.use(Tabs)
app.use(Divider)
app.use(List)
app.use(showToast)

app.mount('#app')
