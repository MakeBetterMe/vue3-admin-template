import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        redirect: '/login'
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: "登录",
            keepAlive: true
        },
        component: () => import("../views/login/index.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
