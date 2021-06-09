import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import Bookmarks from '../views/Bookmarks.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/bookmarks',
        name: 'Bookmarks',
        component: Bookmarks,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
