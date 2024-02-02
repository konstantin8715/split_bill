import HelloPage from '../components/HelloPage.vue';
import AddPersonsPage from '../components/AddPersonsPage.vue';
import AddPositionsPage from '../components/AddPositionsPage.vue';
import ResultPage from '../components/ResultPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
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
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    // history: createWebHistory(process.env.BASE_URL),
});

export default router;