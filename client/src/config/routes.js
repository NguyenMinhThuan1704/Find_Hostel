import { path } from 'utils/constant';

const routes = {
    home: '/*',
    login: '/login',
    register: '/register',
    forgotPassword: '/forgotPassword',
    rentalApartment: `${path.CHO_THUE_CAN_HO}`,
    rentalRoom: `${path.CHO_THUE_PHONG_TRO}`,
    rentalHouse: `${path.NHA_CHO_THUE}`,
    rentalSpace: `${path.CHO_THUE_MAT_BANG}`,
};

export default routes;
