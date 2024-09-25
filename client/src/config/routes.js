const routes = {
    home: '/*',
    home__page: ':page',
    login: '/login',
    register: '/register',
    forgotPassword: '/forgotPassword',
    rentalApartment: '/cho-thue-can-ho',
    rentalRoom: `/cho-thue-phong-tro`,
    rentalHouse: `/nha-cho-thue`,
    rentalSpace: `/cho-thue-mat-bang`,
    news: `/tin-tuc`,
    listPrice: '/bang-gia-dich-vu',
    search: 'tim-kiem',

    profile: '/tai-khoan',
    postManage: '/tin-dang',
    rechargeHistory: '/lich-su-nap-tien',
    paymentHistory: '/lich-su-thanh-toan',
    contact: '/lien-he',
    detailPost: '/chi-tiet/:title/:postId',
};

export default routes;
