import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Posts from '../views/Posts.vue'
import PostDetail from '../views/PostDetail.vue'
import NoPost from '../views/NoPost.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component: Home
    },
    {
        path:'/about',
        name:'about',
        component: About
    },
    {
        path:'/contact',
        name:'contact',
        component: Contact
    },
    // Nested Routes
    {
        path:'/posts',
        component: Posts,
        children:[
            {
                path:'',
                component:NoPost
            },
            {
                path:':id(\\d+)',
                component:PostDetail
            },
        ]
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;