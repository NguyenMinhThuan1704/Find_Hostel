import axios from '../axiosConfig';
import axiosDefault from 'axios';

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
            const response = await axiosDefault({
                method: 'get',
                url: 'https://esgoo.net/api-tinhthanh/1/0.htm',
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPublicProvinces = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosDefault({
                method: 'get',
                url: 'https://esgoo.net/api-tinhthanh/1/0.htm',
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
export const apiGetPublicDistrict = (provinceId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosDefault({
                method: 'get',
                url: `https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPublicWard = (districtId) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosDefault({
                method: 'get',
                url: `https://esgoo.net/api-tinhthanh/3/${districtId}.htm`,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
