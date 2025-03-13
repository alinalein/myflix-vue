import HomePage from "./components/HomePage.vue";
import LogIn from "./components/LogIn.vue";
import UserProfile from "./components/UserProfile.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/log-in'
    },
    {
        name: 'UserProfile',
        component: UserProfile,
        path: '/profile'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;