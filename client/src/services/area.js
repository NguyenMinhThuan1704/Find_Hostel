import axiosConfig from 'axiosConfig';
import qs from 'qs';

export const apiGetAreaLimitAdmin = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/area/area-admin`,
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
                params: query,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiCreateArea = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: `/api/v1/area/create-area`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiUpdateArea = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: `/api/v1/area/update-area`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeleteArea = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: `/api/v1/area/delete-area`,
                params: { id },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
