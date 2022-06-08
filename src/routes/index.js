import Home from '~/pages/Home';
import Category from '~/pages/Category';

const publicRoutes = [
    { path: '/', component: Home },
    {
        path: '/danh-muc',
        component: Category,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
