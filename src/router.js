import VueRouter from 'vue-router';
import List from './components/List.vue';
import Edit from './components/Edit.vue';
import Add from './components/Add.vue';
import Read from './components/Read.vue'

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
        },
        {
            path: '/add',
            component: Add
        },
        {
            path: '/read/:id',
            component: Read
        }
    ]
})