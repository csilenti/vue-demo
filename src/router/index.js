import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '',
            redirect: '/showCasePage'
        },
        {
            path: '/showCasePage',
            name: 'showCasePage',
            component: () => import('../pages/showCasePage.vue'),
            meta: {
                tatil: 'showCasePage'
            }
        }
    ]
});

export default router;
