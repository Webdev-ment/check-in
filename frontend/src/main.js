/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import authLayout from './layouts/auth.vue'
import guestLayout from './layouts/guest.vue'
import adminAuthLayout from './layouts/adminAuth.vue'


// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

app.component("guest-layout", guestLayout)
app.component("default-layout", authLayout)
app.component("admin-layout", adminAuthLayout)
