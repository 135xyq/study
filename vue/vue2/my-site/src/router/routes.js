import Home from '@/views/Home';
import About from '@/views/About';
import Message from '@/views/Message';
import Blog from '@/views/Blog';
import Project from '@/views/Project';

export default [
    { name: 'home', path: '/', component: Home },
    { name: 'about', path: '/about', component: About },
    { name: 'message', path: '/message', component: Message },
    { name: 'blog', path: '/blog', component: Blog },
    { name: 'project', path: '/project', component: Project },
];