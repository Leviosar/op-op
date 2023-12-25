import './style.css'

import { createApp } from 'vue'

import Game from './views/Game.vue'

import { vuetify } from './plugins/vuetify';
import { store } from './store';

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $dialog: {
      open: ({title, text}: {title: string, text: string}) => Promise<boolean>;
    };
  }
}

const app = createApp(Game)

app.use(vuetify)
app.use(store)

app.mount('#app')
