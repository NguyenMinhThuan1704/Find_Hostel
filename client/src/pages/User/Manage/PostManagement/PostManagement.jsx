import React, { useState } from 'react';
import Table from './Table';
import Button from 'components/Button';
import config from 'config';

function PostManagement() {
    const [data, setData] = useState([
        {
            maTin: '001',
            anhDaiDien: 'https://via.placeholder.com/50',
            tieuDe: 'Sản phẩm 1',
            gia: '1.000.000 VND',
            ngayBatDau: '2024-09-01',
            ngayHetHan: '2024-09-30',
            trangThai: 'Còn hạn',
        },
    ]);

    return (
        <div>
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
                        to={config.routes.profile}
                        className="bg-red-500 text-white text-center px-4 py-2 rounded-md hover:bg-red-700 w-full sm:w-auto"
                    >
                        Đăng tin mới
                    </Button>
                </div>
            </div>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <Table data={data} />
            </div>
        </div>
    );
}

export default PostManagement;
