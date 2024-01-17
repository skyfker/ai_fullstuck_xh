import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import router from './router'


import { Swipe, SwipeItem, Button  } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(Swipe);
app.use(SwipeItem);
app.use(Button);

app.use(router)
app.mount('#app')
