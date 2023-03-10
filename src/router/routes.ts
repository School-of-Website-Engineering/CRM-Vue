// 路由模块
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    // 重定向
    {
        path    : '/',
        redirect: '/home'
    },
    // 登录
    {
        path     : '/login',
        name     : 'login',
        component: () => import('../views/Login/index.vue')
    },
    {
        // 主页
        path     : '/home',
        name     : 'home',
        component: () => import('../components/Home/index.vue'),
        children : [
            // 首页
            {
                path     : '/index',
                name     : 'index',
                component: () => import('@/views/Index/index.vue')
            },
            {
                path     : '/order',
                name     : 'order',
                component: () => import('@/views/Order/index.vue')
            },
            {
                path     : '/census',
                name     : 'census',
                component: () => import('@/views/Census/index.vue')
            },
            {
                path     : '/monitor',
                name     : 'monitor',
                component: () => import('@/views/Monitor/index.vue')
            },
            //     欢迎页
            {
                path     : '/welcome',
                name     : 'welcome',
                component: () => import('@/views/Welcome/index.vue')
            }
        ]
    },
    //     404
    {
        path     : '/:pathMatch(.*)*',
        name     : 'not-found',
        component: () => import('../components/NotFound.vue')
    }
];
