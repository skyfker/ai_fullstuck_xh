import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './assets/style/reset.css'
import router from './router'
import store from './store'

// 1. 引入你需要的组件
import { Button } from 'vant';
import { Area, AddressEdit, AddressList, SubmitBar ,Swipe, SwipeItem, Skeleton, Tabbar, TabbarItem, Icon,Form, Field, CellGroup, ActionBar, ActionBarIcon, ActionBarButton, SwipeCell, Card, Checkbox, CheckboxGroup, Stepper } from 'vant';
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
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(SwipeCell);
app.use(Card);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Stepper);
app.use(SubmitBar);
app.use(AddressList);
app.use(AddressEdit);
app.use(Area);

app.use(router)
app.use(store)
app.mount('#app')
