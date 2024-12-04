import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Empty, Tab, Tabs, Divider, Col, Row, showToast, List, Cell } from 'vant'
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
app.use(Cell)
app.use(Col)
app.use(Row)
app.use(Cell)
app.use(Empty)
app.use(showToast)

app.mount('#app')
