import HelloPage from '../components/HelloPage.vue';
import AddUsersPage from '../components/AddUsersPage.vue';
import CalculatingPage from '../components/CalculatingPage.vue';
import ResultPage from '../components/ResultPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: HelloPage,
    },
    {
        path: '/addusers',
        component: AddUsersPage,
    },
    {
        path: '/calculate',
        component: CalculatingPage,
    },
    {
        path: '/result',
        component: ResultPage,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
});

export default router;