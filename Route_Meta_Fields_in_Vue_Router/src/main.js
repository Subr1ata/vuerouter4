import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// // Global Before Guards
// router.beforeEach((to,from)=>{
//     console.log("Global - beforeEach Called");
//     console.log("From: ", from);
//     console.log("To: ", to);
//     console.log("to.meta: ", to.meta);
//     console.log("to.meta.isAuthenticated: ", to.meta.isAuthenticated);
// })

// router.beforeEach((to, from)=>{
//     console.log("to.meta: ", to.meta);
//     if(!to.meta.isAuthenticated && to.name !== 'login'){
//         return {name:'login'}
//     }
// })