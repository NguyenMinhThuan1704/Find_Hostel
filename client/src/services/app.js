import axios from '../axiosConfig';
import Axios from 'axios';

export const apiGetPrices = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/api/v1/price/all',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAreas = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'get',
                url: '/api/v1/area/all',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProvinces = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await Axios({
                method: 'get',
                url: 'https://esgoo.net/api-tinhthanh/4/0.htm',
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
