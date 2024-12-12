import axiosConfig from 'axiosConfig';
import qs from 'qs';

export const apiGetAllPackage = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/v1/package/all',
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPackageLimitAdmin = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/package/package-admin`,
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
                params: query,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiCreatePackage = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: `/api/v1/package/create-package`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiUpdatePackage = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: `/api/v1/package/update-package`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeletePackage = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: `/api/v1/package/delete-package`,
                params: { id },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
