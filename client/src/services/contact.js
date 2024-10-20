import axiosConfig from 'axiosConfig';

export const apiCreateContact = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: 'post',
                url: '/api/v1/contact/create-contact',
                data: payload,
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
