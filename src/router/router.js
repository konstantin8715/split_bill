import HelloPage from '../pages/HelloPage.vue';
import AddPersonsPage from '../pages/AddPersonsPage.vue';
import AddPositionsPage from '../pages/AddPositionsPage.vue';
import ResultPage from '../pages/ResultPage.vue';
import {
    createRouter,
    createWebHistory
} from 'vue-router';

const routes = [{
        path: '/',
        component: HelloPage,
    },
    {
        path: '/addpersons',
        component: AddPersonsPage,
    },
    {
        path: '/addpositions',
        component: AddPositionsPage,
    },
    {
        path: '/result',
        component: ResultPage,
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