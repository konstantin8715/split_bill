import {
    createApp
} from 'vue'
import App from './App.vue'
import './main.scss';
import router from './router/router';
import myComponents from './components/UI';
import {
    createPinia
} from 'pinia';

import 'vuetify/styles'
import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App);

myComponents.forEach(component => {
    app.component(component.name, component)
})

const vuetify = createVuetify({
    components,
    directives,
})

app
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .mount('#app');