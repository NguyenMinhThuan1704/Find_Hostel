import actionTypes from '../actions/actionTypes';

const initState = {
    isLoggedIn: false,
    token: null,
    msg: '',
    update: false,
    isSuccess: null,
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        // case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg: 'Đăng nhập thành công',
                isSuccess: true,
            };
        case actionTypes.REGISTER_FAIL:
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null,
                update: !state.update,
                isSuccess: false,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: '',
                isSuccess: null,
            };

        default:
            return state;
    }
};

export default authReducer;
