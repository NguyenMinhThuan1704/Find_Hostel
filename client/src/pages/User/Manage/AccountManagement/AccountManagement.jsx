import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiUploadImages, updateUser } from 'services';
import images from 'assets/images';
import { toast, ToastContainer } from 'react-toastify';

function AccountManagement() {
    const { currentData } = useSelector((state) => state.user);

    const [payload, setPayload] = useState({
        name: currentData?.name || '',
        email: currentData?.email || '',
        zalo: currentData?.zalo || '',
        fbUrl: currentData?.fbUrl || '',
        avatar: currentData?.avatar,
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!payload.name) tempErrors.name = 'Tên hiển thị không được để trống';
        if (!payload.email) tempErrors.email = 'Email không được để trống';
        else if (!/\S+@\S+\.\S+/.test(payload.email)) tempErrors.email = 'Email không hợp lệ';
        if (!payload.zalo) tempErrors.zalo = 'Số Zalo không được để trống';
        if (!payload.fbUrl) tempErrors.fbUrl = 'Facebook không được để trống';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUploadFile = async (e) => {
        const img = e.target.files[0];
        const folder = 'findHostel';

        const formData = new FormData();
        formData.append('file', img);
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESETS);
        formData.append('folder', folder);
        const response = await apiUploadImages(formData);
        if (response.status === 200) {
            setPayload((prev) => ({ ...prev, avatar: response.data?.secure_url }));
        }
    };

    const handleSubmit = async () => {
        if (validate()) {
            const response = await updateUser(payload);
            if (response.data.err === 0) {
                toast.success('Cập nhật thông tin thành công!');
            } else {
                toast.error('Cập nhật thông tin thất bại!');
            }
        } else {
            toast.warning('Missing input!');
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className="flex flex-col lg:flex-row sm:w-auto lg:justify-between lg:items-center mb-4 border-b border-b-slate-400 p-4">
                <h1 className="my-0 ">Quản lý tài khoản</h1>
            </div>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Mã thành viên</label>
                    <input
                        type="text"
                        value={currentData.id}
                        disabled
                        className="block w-full my-6 mb-14 bg-gray-100 border border-gray-300 border-solid rounded-md px-3 py-2 text-gray-700"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <div className="flex-grow">
                        <label className="block text-3xl font-medium text-gray-700">Số điện thoại</label>
                        <input
                            type="text"
                            value={currentData.phone}
                            name="phoneNumber"
                            onChange={handleChange}
                            disabled
                            className=" block w-full my-6 border border-solid border-gray-300 rounded-md px-3 py-2"
                        />
                        <div className="w-full text-right">
                            <Link className=" text-blue-500 hover:text-blue-800">Đổi số điện thoại</Link>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Tên hiển thị</label>
                    <input
                        type="text"
                        name="name"
                        value={payload.name}
                        onChange={handleChange}
                        className={`mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2 ${
                            errors.name ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={payload.email}
                        onChange={handleChange}
                        className={`mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2 ${
                            errors.email ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Số Zalo</label>
                    <input
                        type="text"
                        name="zalo"
                        value={payload.zalo}
                        onChange={handleChange}
                        className={`mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2 ${
                            errors.zalo ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.zalo && <p className="text-red-500">{errors.zalo}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Facebook</label>
                    <input
                        type="text"
                        name="fbUrl"
                        value={payload.fbUrl}
                        onChange={handleChange}
                        className={`mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2 ${
                            errors.fbUrl ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.fbUrl && <p className="text-red-500">{errors.fbUrl}</p>}
                </div>

                <div className="mb-4 flex">
                    <label className="block text-3xl font-medium text-gray-700">Mật khẩu</label>
                    <Link className="ml-4 text-blue-500 hover:text-blue-800">Đổi mật khẩu</Link>
                </div>

                <div className="mb-4 flex">
                    <label htmlFor="avatar" className="block text-3xl font-medium text-gray-700">
                        Ảnh đại diện
                    </label>
                    <div className="text-center ml-8">
                        <img
                            src={payload.avatar || images.noImage}
                            alt="avatar"
                            className="w-[200px] h-[200px] border border-solid border-stone-600 object-cover rounded-full mb-8"
                        />
                        <input onChange={handleUploadFile} type="file" id="avatar" />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Lưu & Cập nhật
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountManagement;
