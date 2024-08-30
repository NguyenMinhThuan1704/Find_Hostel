import axiosConfig from 'axiosConfig';

export const apiGetAllCategories = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'get',
                url: '/api/v1/categories/all',
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
