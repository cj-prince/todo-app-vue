import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TButton from './components/Button.vue'

createApp(App).component('TButton', TButton).use(router).mount('#app')
