import axiosConfig from 'axiosConfig';
import qs from 'qs';
import axios from 'axios';

export const apiGetPost = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/v1/post/all',
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPostLimit = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/post/limit`,
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
                params: query,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetNewPosts = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/post/new-post`,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiUploadImages = (images) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: 'post',
                url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
                data: images,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiCreatePost = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: `/api/v1/post/create-post`,
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPostLimitAdmin = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: `/api/v1/post/post-admin`,
                paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
                params: query,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
