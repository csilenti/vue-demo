import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '',
            redirect: '/showcasePage'
        },
        {
            path: '/showcasePage',
            name: 'showcasePage',
            component: () => import('../pages/showCasePage.vue'),
            meta: {
                title: '二维码展示页面'
            }
        }
    ]
});

export default router;
