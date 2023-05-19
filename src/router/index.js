import Vue from "vue";
import Router from "vue-router";
import Index from "@/index"
import Home from "@/home"

Vue.use(Router)
const router = new Router({
    routes: [
        { path: '/', component: Index },
        { path: '/home', component: Home }
    ]
})
export default router