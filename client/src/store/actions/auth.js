import actionTypes from './actionTypes';
import { apiLogin, apiRegister } from '../../services/auth';

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token,
            });
            return true;
        } else {
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.msg,
            });
            return false;
        }
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: null,
        });
        console.error('Registration failed:', error);
        return false;
    }
};

export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                data: response.data.token,
                role: response.data.type,
            });
            return true;
        } else {
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                data: response.data.msg,
            });
            return false;
        }
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            data: null,
        });
        console.error('Login failed:', error);
        return false;
    }
};

export const logout = () => ({
    type: actionTypes.LOGOUT,
});
