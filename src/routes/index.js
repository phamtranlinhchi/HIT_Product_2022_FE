import Home from '~/pages/Home';
import Category from '~/pages/Category';
import Introduce from '~/pages/Introduce';
import NiceBooks from '~/pages/NiceBooks';
import NiceVideos from '~/pages/NiceVideos';
import NicePosts from '~/pages/NicePosts';
import NotFound from '~/pages/NotFound';

const publicRoutes = [
    {
        path: '/danh-muc',
        component: Category,
    },
    {
        path: '/sach-hay',
        component: NiceBooks,
    },
    {
        path: '/bai-viet-hay',
        component: NicePosts,
    },
    {
        path: '/video-hay',
        component: NiceVideos,
    },
    {
        path: '/gioi-thieu',
        component: Introduce,
    },
    { path: '/', component: Home },
    {
        path: '*',
        layout: null,
        component: NotFound,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
