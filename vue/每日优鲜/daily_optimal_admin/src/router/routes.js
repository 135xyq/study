import login from '@/views/login';
import register from '@/views/register'

export default [{
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: 'register',
        path: '/register',
        component: register
    },
];