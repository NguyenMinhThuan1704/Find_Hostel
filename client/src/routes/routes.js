import config from 'config';

// Layout
import { AccountLayout, NoSearchLayout, AdminLayout } from 'layouts';

// Pages
import Home from 'pages/User/Home';
import Login from 'pages/User/Login';
import Register from 'pages/User/Register';
import ForgotPassword from 'pages/User/ForgotPassword';
import Rental from 'pages/User/Rental';
import News from 'pages/User/News';
import ListPrice from 'pages/User/ListPrice';
import Search from 'pages/User/Search';
import DetailPost from 'pages/User/DetailPost';

import AccountManagement from 'pages/User/Manage/AccountManagement';
import PostManage from 'pages/User/Manage/PostManagement';
import RechargeHistory from 'pages/User/Manage/RechargeHistory';
import PaymentHistory from 'pages/User/Manage/PaymentHistory';
import Contact from 'pages/User/Manage/Contact';
import CreatePost from 'pages/User/Manage/CreatePost';
import Recharge from 'pages/User/Manage/Recharge';

import DashBoard from 'pages/Admin/DashBoard';
import PostManagement from 'pages/Admin/PostManagement';
import TypePost from 'pages/Admin/TypePost';
import PackageService from 'pages/Admin/PackageService';
import Price from 'pages/Admin/Price';
import Area from 'pages/Admin/Area';
import Province from 'pages/Admin/Province';
import ContactAd from 'pages/Admin/Contact';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.home__page, component: Home },

    { path: config.routes.login, component: Login, layout: NoSearchLayout },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgotPassword, component: ForgotPassword },

    { path: config.routes.rentalApartment, component: Rental },
    { path: config.routes.rentalRoom, component: Rental },
    { path: config.routes.rentalHouse, component: Rental },
    { path: config.routes.rentalSpace, component: Rental },
    { path: config.routes.findRoommate, component: Rental },

    { path: config.routes.news, component: News },
    { path: config.routes.listPrice, component: ListPrice },
    { path: config.routes.detailPost, component: DetailPost, layout: NoSearchLayout },
    { path: config.routes.detailPostAll, component: DetailPost },
    { path: config.routes.search, component: Search },

    { path: config.routes.profile, component: AccountManagement, layout: AccountLayout },
    { path: config.routes.postManage, component: PostManage, layout: AccountLayout },
    { path: config.routes.rechargeHistory, component: RechargeHistory, layout: AccountLayout },
    { path: config.routes.paymentHistory, component: PaymentHistory, layout: AccountLayout },
    { path: config.routes.contact, component: Contact, layout: AccountLayout },
    { path: config.routes.createPost, component: CreatePost, layout: AccountLayout },
    { path: config.routes.recharge, component: Recharge, layout: AccountLayout },

    { path: config.routes.dashBoard, component: DashBoard, layout: AdminLayout },
    { path: config.routes.postManagement, component: PostManagement, layout: AdminLayout },
    { path: config.routes.typePostManagement, component: TypePost, layout: AdminLayout },
    { path: config.routes.packageService, component: PackageService, layout: AdminLayout },
    { path: config.routes.price, component: Price, layout: AdminLayout },
    { path: config.routes.area, component: Area, layout: AdminLayout },
    { path: config.routes.province, component: Province, layout: AdminLayout },
    { path: config.routes.contactAdmin, component: ContactAd, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
