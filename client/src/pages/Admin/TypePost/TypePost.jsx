/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import config from 'config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import Pagination from 'components/Pagination';
import CUTypePost from './CUTypePost';
import { apiCreateCategory, apiDeleteCategories, apiGetCategoriesLimitAdmin, apiUpdateCategories } from 'services';

function TypePost() {
    const navigate = useNavigate();
    const [searchParams1, setSearchParams1] = useSearchParams();
    const page = parseInt(searchParams1.get('page')) || 1;
    const [listType, setListType] = useState({ rows: [], count: 0 });
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useState({
        searchString: '',
        page: 1,
    });

    const fetchData = async (params) => {
        try {
            const response = await apiGetCategoriesLimitAdmin(params);
            setListType(response?.data?.response || { rows: [], count: 0 });
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchData({ page });
    }, [page]);

    const handleShow = () => {
        setData(null);
        setShow(true);
    };

    const handleEdit = (item) => {
        setData(item);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleSave = async (data, type) => {
        try {
            if (type === 'create') {
                const response = await apiCreateCategory(data);
                if (response?.data?.err === 0) {
                    toast.success('Thêm danh mục mới thành công.', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    setShow(false);
                    fetchData({ page });
                } else {
                    toast.error('Thêm danh mục mới thất bại.');
                }
            } else if (type === 'update') {
                const response = await apiUpdateCategories(data);
                if (response?.data?.err === 0) {
                    toast.success('Cập nhật thành công.', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    setShow(false);
                    fetchData({ page });
                } else {
                    toast.error('Cập nhật thất bại.');
                }
            }
        } catch (error) {
            toast.error('Có lỗi xảy ra.');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Bạn có chắc chắn muốn xóa loại bài đăng này không?')) return;

        try {
            const response = await apiDeleteCategories(id);
            if (response?.data?.err === 0) {
                toast.success('Xóa loại bài đăng thành công!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                fetchData({ page: 1 });
            } else {
                toast.error('Xóa loại bài đăng thất bại!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        } catch (error) {
            console.error('Error deleting cate:', error);
            toast.error('Có lỗi xảy ra khi xóa loại bài đăng!');
        }
    };

    const handleSearchChange = (e) => {
        setSearchParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSearch = () => {
        const query = {
            page: 1,
            ...(searchParams.searchString && { searchString: searchParams.searchString }),
        };

        const queryString = new URLSearchParams(query).toString();
        navigate(`${config.routes.typePostManagement}?${queryString}`);
        fetchData(query);
    };

    const handlePageChange = (newPage) => {
        setSearchParams1({ page: newPage });
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row sm:w-auto lg:justify-between lg:items-center mb-4 border-b border-b-slate-400 p-4">
                <h1 className="my-0">Quản lý loại bài đăng</h1>

                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <input
                        type="text"
                        name="searchString"
                        placeholder="Tìm theo tên loại, tiêu đề hoặc tiêu đề phụ"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
                        value={searchParams.searchString}
                        onChange={handleSearchChange}
                    />

                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        onClick={handleSearch}
                    >
                        Tìm kiếm
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                        onClick={handleShow}
                    >
                        Thêm loại bài đăng
                    </button>
                </div>
            </div>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-center">
                                <th className="border border-gray-300 px-4 py-2 w-[10%]">Mã danh mục</th>
                                <th className="border border-gray-300 px-4 py-2 w-[15%]">Tên danh mục</th>
                                <th className="border border-gray-300 px-4 py-2 w-[25%]">Tiêu đề</th>
                                <th className="border border-gray-300 px-4 py-2 w-[25%]">Tiêu đề phụ</th>
                                <th className="border border-gray-300 px-4 py-2">Ngày tạo</th>
                                <th className="border border-gray-300 px-4 py-2">Ngày cập nhật</th>
                                <th className="border border-gray-300 px-4 py-2">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listType?.rows?.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                                    >
                                        Bạn chưa có loại tin đăng nào.
                                    </td>
                                </tr>
                            ) : (
                                listType?.rows?.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td className="border border-gray-300">
                                            <p className="line-clamp-1">{item.id}</p>
                                        </td>

                                        <td className="border border-gray-300">{item.value}</td>
                                        <td className="border border-gray-300">
                                            <p className="line-clamp-1">{item.header}</p>
                                        </td>
                                        <td className="border border-gray-300">
                                            <p className="line-clamp-1">{item.subheader}</p>
                                        </td>
                                        <td className="border border-gray-300">
                                            {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                                        </td>
                                        <td className="border border-gray-300">
                                            {new Date(item.updatedAt).toLocaleDateString('vi-VN')}
                                        </td>

                                        <td className="border border-gray-300">
                                            <button className="mr-4" onClick={() => handleEdit(item)}>
                                                <FontAwesomeIcon icon={faEdit} title="Sửa" />
                                            </button>
                                            <button onClick={() => handleDelete(item.id)}>
                                                <FontAwesomeIcon icon={faTrash} title="Xóa" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <Pagination counts={listType.count} page={page || 1} onPageChange={handlePageChange} />
            </div>
            <CUTypePost dataRaw={data} isShow={show} onSave={handleSave} onClose={handleClose} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
            />
        </div>
    );
}

export default TypePost;
