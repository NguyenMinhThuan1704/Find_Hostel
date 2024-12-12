import { apiGetNewPosts, apiGetPost, apiGetPostLimit, apiGetPostLimitAdmin, apiGetPostLimitUser } from 'services/post';
import actionTypes from './actionTypes';

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPost();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null,
        });
    }
};

export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostLimit(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                posts: response.data.response?.rows,
                count: response.data.response?.count,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            posts: null,
        });
    }
};

export const getNewPosts =
    (orderBy = 'createdAt') =>
    async (dispatch) => {
        try {
            const response = await apiGetNewPosts(orderBy);

            if (response?.data.err === 0) {
                dispatch({
                    type: actionTypes.GET_NEW_POST,
                    newPosts: response.data.response,
                });
            } else {
                dispatch({
                    type: actionTypes.GET_NEW_POST,
                    msg: response.data.msg,
                    newPosts: null,
                });
            }
        } catch (error) {
            dispatch({
                type: actionTypes.GET_NEW_POST,
                newPosts: null,
            });
        }
    };

export const getPostsLimitUser = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostLimitUser(query);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_USER,
                posts: response.data.response?.rows,
                count: response.data.response?.count,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_USER,
                msg: response.data.msg,
                posts: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_USER,
            posts: null,
        });
    }
};

export const getPostsLimitAdmin = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostLimitAdmin(query);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                posts: response.data.response?.rows,
                count: response.data.response?.count,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_ADMIN,
                msg: response.data.msg,
                posts: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_ADMIN,
            posts: null,
        });
    }
};

export const editData = (dataEdit) => ({
    type: actionTypes.EDIT_DATA,
    dataEdit,
});

export const resetData = () => ({
    type: actionTypes.RESET_DATA_EDIT,
});
