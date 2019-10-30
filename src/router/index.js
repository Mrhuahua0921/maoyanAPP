import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Film from '../views/Film.vue'
import Mine from '../views/Mine.vue'
import NowMovie from '../views/NowMovie.vue'
import HotMovie from '../views/HotMovie.vue'
import  Meituan from '../views/mine/Meituan.vue'
import Mobile from   '../views/mine/Mobile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/movie',
        name: 'movie',
        component: Movie,
        redirect: "/movie/hot",
        children: [{
                path: '/movie/now',
                name: 'now',
                component: NowMovie
            },
            {
                path: '/movie/hot',
                name: 'hot',
                component: HotMovie
            }
        ]
    },
    {
        path: '/film',
        name: 'film',
        component: Film
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine,
        redirect: "/mine/meituan",
        children: [{
            path: '/mine/meituan',
            name: 'meituan',
            component: Meituan
        },
        {
            path: '/mine/mobile',
            name: 'mobile',
            component: Mobile
        }
    ]
    }

]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active'
})

export default router