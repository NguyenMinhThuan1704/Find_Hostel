/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import config from 'config';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'store/actions';
import { Link } from 'react-router-dom';
import Image from 'components/Image';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpdatePost from './UpdatePost';

function PostManagement() {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const { postOfCrr } = useSelector((state) => state.post);
    useEffect(() => {
        dispatch(actions.getPostsLimitAdmin());
    }, []);

    const checkStatus = (endDay) => {
        let endDate = new Date(endDay);
        let today = new Date();

        if (endDate < today) {
            return 'Đã hết hạn';
        } else {
            return 'Đang hoạt động';
        }
    };

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row sm:w-auto lg:justify-between lg:items-center mb-4 border-b border-b-slate-400">
                <h1 className="my-0">Quản lý tin đăng</h1>

                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <input
                        type="text"
                        placeholder="Tìm theo mã tin hoặc tiêu đề"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
                    />
                    <select className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto">
                        <option>Lọc theo loại VIP</option>
                        <option>Tin Hot</option>
                        <option>VIP 1</option>
                        <option>VIP 2</option>
                        <option>VIP 3</option>
                        <option>Tin thường</option>
                    </select>
                    <select className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto">
                        <option>Lọc theo trạng thái</option>
                        <option>Tin đang hiển thị</option>
                        <option>Tin hết hạn</option>
                        <option>Tin đang ẩn</option>
                    </select>
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
                                        colSpan="7"
                                        className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                                    >
                                        Bạn chưa có tin đăng nào. Bấm <Link className="text-blue-500">vào đây</Link> để
                                        bắt đầu đăng tin.
                                    </td>
                                </tr>
                            ) : (
                                postOfCrr.map((item, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="border border-gray-300">
                                            <p className="line-clamp-1">{item.id}</p>
                                        </td>
                                        <td className="border border-gray-300">
                                            <Image
                                                src={JSON.parse(item.images.image)[0] || 'S'}
                                                alt="Ảnh đại diện"
                                                className="w-40 h-40 object-cover"
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
                                            <button className="mr-4">
                                                <FontAwesomeIcon
                                                    icon={faEdit}
                                                    title="Sửa"
                                                    onClick={() => {
                                                        dispatch(actions.editData(item));
                                                        setIsEdit(true);
                                                    }}
                                                />
                                            </button>
                                            <button>
                                                <FontAwesomeIcon icon={faTrash} title="Xóa" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
        </div>
    );
}

export default PostManagement;
