import config from 'config';

// Layout
import { AccountLayout } from 'layouts';

// Pages
import Home from 'pages/User/Home';
import Login from 'pages/User/Login';
import Register from 'pages/User/Register';
import ForgotPassword from 'pages/User/ForgotPassword';
import RentalApartment from 'pages/User/RentalApartment';
import RentalRooms from 'pages/User/RentalRooms';
import RentalHouse from 'pages/User/RentalHouse';
import RentalSpace from 'pages/User/RentalSpace';
import News from 'pages/User/News';
import ListPrice from 'pages/User/ListPrice';

import AccountManagement from 'pages/User/Manage/AccountManagement';
import PostManagement from 'pages/User/Manage/PostManagement';
import RechargeHistory from 'pages/User/Manage/RechargeHistory';
import PaymentHistory from 'pages/User/Manage/PaymentHistory';
import Contact from 'pages/User/Manage/Contact';
import DetailPost from 'pages/User/DetailPost';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.home__page, component: Home },

    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgotPassword, component: ForgotPassword },

    { path: config.routes.rentalApartment, component: RentalApartment },
    { path: config.routes.rentalRoom, component: RentalRooms },
    { path: config.routes.rentalHouse, component: RentalHouse },
    { path: config.routes.rentalSpace, component: RentalSpace },

    { path: config.routes.news, component: News },
    { path: config.routes.listPrice, component: ListPrice },
    { path: config.routes.detailPost, component: DetailPost },

    { path: config.routes.profile, component: AccountManagement, layout: AccountLayout },
    { path: config.routes.postManage, component: PostManagement, layout: AccountLayout },
    { path: config.routes.rechargeHistory, component: RechargeHistory, layout: AccountLayout },
    { path: config.routes.paymentHistory, component: PaymentHistory, layout: AccountLayout },
    { path: config.routes.contact, component: Contact, layout: AccountLayout },

    // { path: config.routes.trademark, component: Trademark, layout: NoSlide },
    // { path: config.routes.test, component: Test, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
