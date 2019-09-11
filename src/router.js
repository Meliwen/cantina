import VueRouter from 'vue-router';
import List from './components/List.vue';
import Edit from './components/Edit.vue'

export default new VueRouter({
    name : "VueRouter",
    routes : [
        {
            path: '/list',
            component: List,
            name : 'List'
        },
        {
            path: '/edit/:id',
            component: Edit
        }
    ]
})