/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import config from 'config';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'store/actions';
import { Link, useNavigate } from 'react-router-dom';
import Image from 'components/Image';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdatePost from './UpdatePost';
import { apiDeletePost } from 'services';
import { toast, ToastContainer } from 'react-toastify';
import Pagination from 'components/Pagination';

function PostManagement() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isEdit, setIsEdit] = useState(false);
    const { postOfCrr, dataEdit } = useSelector((state) => state.post);
    const [searchParams, setSearchParams] = useState({
        status: '',
        packageId: '',
        searchString: '',
        page: 1,
    });

    useEffect(() => {
        dispatch(actions.getPostsLimitAdmin());
    }, [dataEdit]);

    useEffect(() => {
        if (!dataEdit) {
            setIsEdit(false);
        }
    }, [dataEdit]);

    const checkStatus = (endDay) => {
        return new Date(endDay) < new Date() ? 'Đã hết hạn' : 'Đang hoạt động';
    };

    const handleDeletePost = async (postId) => {
        if (!window.confirm('Bạn có chắc chắn muốn xóa bài đăng này không?')) return;

        try {
            const response = await apiDeletePost(postId);
            if (response?.data?.err === 0) {
                toast.success('Xóa bài đăng thành công!');
                dispatch(actions.getPostsLimitAdmin());
            } else {
                toast.error('Xóa bài đăng thất bại!');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            toast.error('Có lỗi xảy ra khi xóa bài đăng!');
        }
    };

    const handleSearchChange = (e) => {
        setSearchParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSearch = () => {
        const query = {
            page: searchParams.page || 1,
            ...(searchParams.status && { status: searchParams.status }),
            ...(searchParams.packageId && { packageId: searchParams.packageId }),
            ...(searchParams.searchString && { searchString: searchParams.searchString }),
        };

        const queryString = new URLSearchParams(query).toString();
        navigate(`/he-thong/tin-dang?${queryString}`);
        dispatch(actions.getPostsLimitAdmin(query));
    };

    return (
        <div>
            <ToastContainer />
            <div className="flex flex-col lg:flex-row sm:w-auto lg:justify-between lg:items-center mb-4 border-b border-b-slate-400">
                <h1 className="my-0">Quản lý tin đăng</h1>

                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <input
                        type="text"
                        name="searchString"
                        placeholder="Tìm theo mã tin hoặc tiêu đề"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
                        value={searchParams.searchString}
                        onChange={handleSearchChange}
                    />
                    <select
                        name="packageId"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
                        value={searchParams.packageId}
                        onChange={handleSearchChange}
                    >
                        <option value="">Lọc theo loại VIP</option>
                        {['Tin Hot', 'VIP 1', 'VIP 2', 'VIP 3', 'Tin thường'].map((text, index) => (
                            <option key={index} value={index + 1}>
                                {text}
                            </option>
                        ))}
                    </select>
                    <select
                        name="status"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
                        value={searchParams.status}
                        onChange={handleSearchChange}
                    >
                        <option value="">Lọc theo trạng thái</option>
                        <option value="true">Tin đang hoạt động</option>
                        <option value="false">Tin hết hạn</option>
                    </select>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        onClick={handleSearch}
                    >
                        Tìm kiếm
                    </button>
                    <Button
                        to={config.routes.createPost}
                        className="bg-red-500 text-white text-center px-4 py-2 rounded-md hover:bg-red-700 w-full sm:w-auto"
                    >
                        Đăng tin mới
                    </Button>
                </div>
            </div>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-center">
                                <th className="border border-gray-300 px-4 py-2 w-[10%]">Mã tin</th>
                                <th className="border border-gray-300 px-4 py-2">Ảnh đại diện</th>
                                <th className="border border-gray-300 px-4 py-2">Tiêu đề</th>
                                <th className="border border-gray-300 px-4 py-2">Giá</th>
                                <th className="border border-gray-300 px-4 py-2">Ngày bắt đầu</th>
                                <th className="border border-gray-300 px-4 py-2">Ngày hết hạn</th>
                                <th className="border border-gray-300 px-4 py-2">Trạng thái</th>
                                <th className="border border-gray-300 px-4 py-2">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {postOfCrr.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                                    >
                                        Bạn chưa có tin đăng nào. Bấm{' '}
                                        <Link className="text-blue-500" to={config.routes.createPost}>
                                            vào đây
                                        </Link>{' '}
                                        để bắt đầu đăng tin.
                                    </td>
                                </tr>
                            ) : (
                                postOfCrr.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td className="border border-gray-300">
                                            <p className="line-clamp-1">{item.id}</p>
                                        </td>
                                        <td className="border border-gray-300">
                                            <Image
                                                src={JSON.parse(item.images.image)[0] || 'S'}
                                                alt="Ảnh đại diện"
                                                className="w-[100px] h-[100px] object-cover m-auto my-7"
                                            />
                                        </td>
                                        <td className="border border-gray-300">{item.title}</td>
                                        <td className="border border-gray-300">{item.priceNumber} triệu/tháng</td>
                                        <td className="border border-gray-300">
                                            {new Date(item.postPackages.startDay).toLocaleDateString('vi-VN')}
                                        </td>
                                        <td className="border border-gray-300">
                                            {new Date(item.postPackages.endDay).toLocaleDateString('vi-VN')}
                                        </td>
                                        <td className="border border-gray-300">
                                            {checkStatus(item.postPackages.endDay)}
                                        </td>
                                        <td className="border border-gray-300">
                                            <button
                                                className="mr-4"
                                                onClick={() => {
                                                    dispatch(actions.editData(item));
                                                    setIsEdit(true);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faEdit} title="Sửa" />
                                            </button>
                                            <button onClick={() => handleDeletePost(item.id)}>
                                                <FontAwesomeIcon icon={faTrash} title="Xóa" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <Pagination page={searchParams.page} />
            </div>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
        </div>
    );
}

export default PostManagement;
