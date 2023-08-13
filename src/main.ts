import './style.css'

import { createApp } from 'vue'

import Game from './views/Game.vue'

import { vuetify } from './plugins/vuetify';
import { store } from './store';

const app = createApp(Game)

app.use(vuetify)
app.use(store)

app.mount('#app')
