import Home from '@/views/Home';
import About from '@/views/About';
import Message from '@/views/Message';
import Blog from '@/views/Blog';
import Project from '@/views/Project';
import BlogDetail from '@/views/Blog/BlogDetail';

export default [
    { name: 'home', path: '/', component: Home },
    { name: 'about', path: '/about', component: About },
    { name: 'message', path: '/message', component: Message },
    { name: 'blog', path: '/blog', component: Blog },
    { name: 'blogtype', path: '/blog/cate:categoryId', component: Blog },
    { name: 'blogdetail', path: '/blog/:id', component: BlogDetail },
    { name: 'project', path: '/project', component: Project },
];