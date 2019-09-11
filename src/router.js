import VueRouter from 'vue-router';
import List from './components/List.vue';

export default new VueRouter({
    name : "VueRouter",
    routes : [
        {
            path: '/list',
            component: List,
            name : 'List'
        },
    ]
})