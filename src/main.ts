import { createApp, markRaw } from 'vue'

import App from 'App.vue'
import router from 'router'
import { createPinia } from 'pinia'
import vSelect from 'vue-select';
const app = createApp(App)

import 'vue-select/dist/vue-select.css';

app.component('v-select', vSelect);
app.use(router)


const pinia = createPinia()

pinia.use(({store}) => {
  store['router'] = markRaw(router)
})

app.use(pinia)

app.mount('#app')
