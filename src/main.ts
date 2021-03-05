import {createApp} from 'vue'
import router from "./router";
import store from "./store";

// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import './index.css'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
