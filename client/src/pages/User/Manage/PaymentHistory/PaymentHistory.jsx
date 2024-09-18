import React, { useState } from 'react';
import Table from './Table';

function PaymentHistory() {
    const [data, setData] = useState([
        {
            thoiGian: '2024-09-01',
            loaiChuyenMuc: 'Nhà thuê nguyên căn',
            maTinDang: '01',
            loaiTin: 'Tin VIP 3',
            soDu: '10.000.000 VNĐ',
            phi: '100.000 VNĐ',
            conLai: '9.900.000 VNĐ',
            trangThai: 'Hoàn Thành',
        },
    ]);
    return (
        <div>
            <h1 className="my-0 border-b border-b-slate-400">Lịch sử thanh toán tin</h1>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md">
                <Table data={data} />
            </div>
        </div>
    );
}

export default PaymentHistory;
