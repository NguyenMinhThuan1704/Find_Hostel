import axiosConfig from 'axiosConfig';
import qs from 'qs';

export const apiGetPriceLimitAdmin = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/price/price-admin`,
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
                params: query,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiCreatePrice = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: `/api/v1/price/create-price`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiUpdatePrice = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'put',
                url: `/api/v1/price/update-price`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiDeletePrice = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'delete',
                url: `/api/v1/price/delete-price`,
                params: { id },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
