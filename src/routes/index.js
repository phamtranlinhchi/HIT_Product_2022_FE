import Home from '~/pages/Home';
import Category from '~/pages/Category';
import Introduce from '~/pages/Introduce';
import NiceBooks from '~/pages/NiceBooks';
import NiceVideos from '~/pages/NiceVideos';
import NicePosts from '~/pages/NicePosts';

const publicRoutes = [
    { path: '/', component: Home },
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
