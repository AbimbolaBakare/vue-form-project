import Vue from 'vue'
import Router from 'vue-router'
import Form from "../components/Form"


Vue.use(Router);


export default new Router({
linkActiveClass : true,
 mode: 'history',
base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Form',
            component: Form
        },
    ]
})