import {
    createRouter,
    createWebHistory
} from 'vue-router';

const routes = [{
        path: '/',
        component: async () => await import('../pages/HelloPage.vue'),
    },
    {
        path: '/addpersons',
        component: async () => await import('../pages/AddPersonsPage.vue'),
    },
    {
        path: '/addpositions',
        component: async () => await import('../pages/AddPositionsPage.vue'),
    },
    {
        path: '/result',
        component: async () => await import('../pages/ResultPage.vue'),
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;