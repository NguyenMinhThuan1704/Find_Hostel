import React, { useState } from 'react';
import Table from './Table';

function RechargeHistory() {
    const [data, setData] = useState([
        {
            ngayNap: '2024-09-01',
            maGiaoDich: '01',
            phuongThuc: 'Momo',
            soTien: '1.000.000 VNĐ',
            khuyenMai: '20%',
            thucNhan: '1.200.000 VNĐ',
            trangThai: 'Hoàn thành',
            ghiChu: '',
        },
    ]);
    return (
        <div>
            <div className="flex flex-col lg:flex-row sm:w-auto lg:justify-between lg:items-center mb-4 border-b border-b-slate-400 p-4">
                <h1 className="my-0">Lịch sử nạp tiền</h1>
            </div>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <Table data={data} />
            </div>
        </div>
    );
}

export default RechargeHistory;
