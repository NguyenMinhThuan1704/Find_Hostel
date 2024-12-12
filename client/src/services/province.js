import axiosConfig from 'axiosConfig';
import qs from 'qs';

export const apiGetProvinceLimitAdmin = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/province/province-admin`,
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
                params: query,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiCreateProvince = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: `/api/v1/province/create-province`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiUpdateProvince = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: `/api/v1/province/update-province`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteProvince = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: `/api/v1/province/delete-province`,
                params: { id },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
