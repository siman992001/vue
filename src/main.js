import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MyApp from './MyApp.vue'
import router from './router'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(MyApp)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
})

app.mount('#app')
