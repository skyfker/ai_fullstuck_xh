import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import router from './router'

// 1. 引入你需要的组件
import { Button } from 'vant';
import { Swipe, SwipeItem, Skeleton, Tabbar, TabbarItem, Icon,Form, Field, CellGroup } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)
app.use(Button)
app.use(Swipe);
app.use(SwipeItem);
app.use(Skeleton);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.use(router)
app.mount('#app')
