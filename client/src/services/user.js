import axios from '../axiosConfig';

export const apiGetCurrentUser = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/api/v1/user/get-crr',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const updateUser = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'put',
                url: '/api/v1/user/',
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
