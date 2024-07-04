// Vue 默认引入
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

//引入vue router
import router from './router/index';

// 引入 Vuesac UI库
import Vuesax from 'vuesax-alpha';
import 'vuesax-alpha/theme-chalk/index.css';
import 'vuesax-alpha/theme-chalk/dark/css-vars.css';

// 创建Vue实例
const app = createApp(App)
    .use(router)
    .use(Vuesax, {
        colors: {
            primary: 'rgb(36, 159, 253)',
            success: 'rgb(23, 201, 100)',
            danger: 'rgb(242, 19, 93)',
            warning: 'rgb(255, 130, 0)',
            dark: 'rgb(36, 33, 69)'
        }
    })
    .mount('#app');
