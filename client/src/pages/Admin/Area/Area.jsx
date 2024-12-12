/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import config from 'config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import Pagination from 'components/Pagination';
import CUArea from './CUArea';
import { apiCreateArea, apiDeleteArea, apiGetAreaLimitAdmin, apiUpdateArea } from 'services';

function Area() {
    const navigate = useNavigate();
    const [searchParams1, setSearchParams1] = useSearchParams();
    const page = parseInt(searchParams1.get('page')) || 1;
    const [listArea, setArea] = useState({ rows: [], count: 0 });
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useState({
        searchString: '',
        page: 1,
    });

    const fetchData = async (params) => {
        try {
            const response = await apiGetAreaLimitAdmin(params);
            setArea(response?.data?.response || { rows: [], count: 0 });
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
                const response = await apiCreateArea(data);
                if (response?.data?.err === 0) {
                    toast.success('Thêm mới thành công.', {
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
                } else if (response?.data?.err === 1) {
                    toast.warning('Thêm mới thất bại. Bản ghi đã tồn tại!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    setShow(false);
                } else {
                    toast.error('Thêm mới thất bại', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            } else if (type === 'update') {
                const response = await apiUpdateArea(data);
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
                    toast.error('Cập nhật thất bại.', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    setShow(false);
                }
            }
        } catch (error) {
            toast.error('Có lỗi xảy ra.');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Bạn có chắc chắn muốn xóa khoảng diện tích này không?')) return;

        try {
            const response = await apiDeleteArea(id);
            if (response?.data?.err === 0) {
                toast.success('Xóa thành công!', {
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
                toast.error('Xóa thất bại!', {
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
            console.error('Error deleting package:', error);
            toast.error('Có lỗi xảy ra khi xóa khoảng diện tích!');
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
        navigate(`${config.routes.area}?${queryString}`);
        fetchData(query);
    };

    const handlePageChange = (newPage) => {
        setSearchParams1({ page: newPage });
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row sm:w-auto lg:justify-between lg:items-center mb-4 border-b border-b-slate-400 p-4">
                <h1 className="my-0">Quản lý khoảng diện tích</h1>

                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <input
                        type="text"
                        name="searchString"
                        placeholder="Tìm theo tên gói, mô tả, giá, số sao, khoảng thời gian"
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
                        Thêm diện tích
                    </button>
                </div>
            </div>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-center">
                                <th className="border border-gray-300 px-4 py-2">Mã khoảng diện tích</th>
                                <th className="border border-gray-300 px-4 py-2">Code</th>
                                <th className="border border-gray-300 px-4 py-2">Tên khoảng diện tích</th>
                                <th className="border border-gray-300 px-4 py-2">Ngày tạo</th>
                                <th className="border border-gray-300 px-4 py-2">Ngày cập nhật</th>
                                <th className="border border-gray-300 px-4 py-2">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listArea?.rows?.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                                    >
                                        Bạn chưa có loại tin đăng nào.
                                    </td>
                                </tr>
                            ) : (
                                listArea?.rows?.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td className="border border-gray-300">
                                            <p className="line-clamp-1">{item.id}</p>
                                        </td>

                                        <td className="border border-gray-300">{item.code}</td>
                                        <td className="border border-gray-300">
                                            <p className="line-clamp-1">{item.value}</p>
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
                <Pagination counts={listArea.count} page={page || 1} onPageChange={handlePageChange} />
            </div>
            <CUArea dataRaw={data} isShow={show} onSave={handleSave} onClose={handleClose} />
            <ToastContainer
                position="top-right"
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

export default Area;
