const routes = {
    home: '/',
    home__page: '/:page',
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
    detailPost: '/chi-tiet/:title/:postId',
    detailPostAll: '/chi-tiet/*',

    profile: '/he-thong/tai-khoan',
    postManage: '/he-thong/tin-dang',
    createPost: '/he-thong/tin-dang/dang-tin-moi',
    rechargeHistory: '/he-thong/lich-su-nap-tien',
    paymentHistory: '/he-thong/lich-su-thanh-toan',
    contact: '/he-thong/lien-he',
    recharge: '/he-thong/nap-tien',
};

export default routes;
