import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const About = resolve => require(['@/views/About'], resolve)

const Debug = resolve => require(['@/views/Debug'], resolve)

const Support = resolve => require(['@/views/Support'], resolve)

const Callback = resolve => require(['@/views/oauth/Callback'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

const App = resolve => require(['@/views/app/App'], resolve)

// 开发者平台
const Develop = resolve => require(['@/views/develop/Home'], resolve)
const DeveloperAdd = resolve => require(['@/views/develop/Add'], resolve)
const AdminDeveloper = resolve => require(['@/views/develop/Admin'], resolve)

Vue.use(Router)

const APP_NAME = '云设'

let routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/debug',
        component: Debug
    },
    {
        path: '/oauth/callback',
        component: Callback
    },
    {
        path: '/support',
        component: Support
    },
    // 应用
    {
        path: '/me/apps',
        component: App
    },
    // 开发者
    {
        path: '/doc',
        component: Develop
    },
    {
        path: '/developers/add',
        component: DeveloperAdd
    },
    {
        path: '/admin/develop',
        component: AdminDeveloper
    },
    // 404
    {
        path: '*',
        component: Error404,
        meta: {
            title: '页面找不到了'
        }
    }
]

function getTitle(title) {
    if (title) {
        return title
    } else {
        return APP_NAME
    }
}

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = getTitle(to.meta.title)
    } else {
        document.title = getTitle()
    }
    next()
})

export default router
