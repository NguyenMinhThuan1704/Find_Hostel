import Image from 'components/Image';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AccountManagement() {
    const [profile, setProfile] = useState({
        memberId: '#143942',
        phoneNumber: '0342615519',
        displayName: 'Nguyễn Hoàng Anh',
        email: 'hoanganh@gmail.com',
        zaloNumber: '0342615519',
        facebook: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };
    return (
        <div>
            <h1 className="my-0 border-b border-b-slate-400">Quản lý tài khoản</h1>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Mã thành viên</label>
                    <input
                        type="text"
                        value={profile.memberId}
                        disabled
                        className="block w-full my-6 mb-14 bg-gray-100 border border-gray-300 border-solid rounded-md px-3 py-2 text-gray-700"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <div className="flex-grow">
                        <label className="block text-3xl font-medium text-gray-700">Số điện thoại</label>
                        <input
                            type="text"
                            value={profile.phoneNumber}
                            name="phoneNumber"
                            onChange={handleChange}
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
                        name="displayName"
                        value={profile.displayName}
                        onChange={handleChange}
                        className="mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Số Zalo</label>
                    <input
                        type="text"
                        name="zaloNumber"
                        value={profile.zaloNumber}
                        onChange={handleChange}
                        className="mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-3xl font-medium text-gray-700">Facebook</label>
                    <input
                        type="text"
                        name="facebook"
                        value={profile.facebook}
                        onChange={handleChange}
                        className="mb-14 block w-full my-6 border border-gray-300 border-solid rounded-md px-3 py-2"
                    />
                </div>

                <div className="mb-4 flex ">
                    <label className="block text-3xl font-medium text-gray-700">Mật khẩu</label>
                    <Link className="ml-4 text-blue-500 hover:text-blue-800">Đổi mật khẩu</Link>
                </div>

                <div className="mb-4 flex">
                    <label className="block text-3xl font-medium text-gray-700">Ảnh đại diện</label>
                    <div className="text-center ml-8">
                        <Image
                            src="/path/to/placeholder-image.png"
                            alt="Profile Avatar"
                            className="w-50 h-50 border border-solid border-stone-600 object-cover rounded-full"
                        />
                        <button className="mt-8 px-4 py-2 border border-solid rounded-md text-3xl font-medium bg-gray-100 hover:bg-gray-400">
                            Chọn ảnh
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Lưu & Cập nhật
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccountManagement;
