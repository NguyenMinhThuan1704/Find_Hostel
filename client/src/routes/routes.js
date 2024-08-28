import config from 'config';

// Layout
// import { NoSlide, AdminLayout } from 'layouts';

// Pages
import Home from 'pages/User/Home';
import Login from 'pages/User/Login';
import Register from 'pages/User/Register';
import ForgotPassword from 'pages/User/ForgotPassword';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgotPassword, component: ForgotPassword },
    // { path: config.routes.trademark, component: Trademark, layout: NoSlide },
    // { path: config.routes.detailproduct, component: DetailProduct, layout: NoSlide },
    // { path: config.routes.news, component: News, layout: NoSlide },
    // { path: config.routes.contact, component: Contact, layout: NoSlide },
    // { path: config.routes.product, component: Product, layout: NoSlide },
    // { path: config.routes.cart, component: Cart, layout: NoSlide },
    // { path: config.routes.payment, component: Payment, layout: NoSlide },
    // { path: config.routes.profile, component: Profile, layout: NoSlide },
    // { path: config.routes.purchase, component: Purchase, layout: NoSlide },

    // { path: config.routes.dashboard, component: Dashboard, layout: AdminLayout },
    // { path: config.routes.test, component: Test, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
