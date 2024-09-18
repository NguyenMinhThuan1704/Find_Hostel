import React from 'react';
import { Link } from 'react-router-dom';

function Table({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Ngày nạp</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Mã giao dịch</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Phương thức</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Số tiền</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Khuyến mãi</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Thực nhận</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Trạng thái</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                Bạn chưa nạp lần nào. Bấm <Link className="text-blue-500">vào đây</Link> để nạp lần đầu
                                với nhiều ưu đãi.
                            </td>
                        </tr>
                    ) : (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{item.ngayNap}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.maGiaoDich}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.phuongThuc}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.soTien}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.khuyenMai}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.thucNhan}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.trangThai}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.ghiChu}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
