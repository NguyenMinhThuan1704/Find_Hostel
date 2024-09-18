import React from 'react';
import { Link } from 'react-router-dom';

function Table({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Thời gian</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Loại chuyên mục</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Mã tin đăng</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Loại tin</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Số dư</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Phí</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Còn lại</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                Bạn chưa thanh toán lần nào. Bấm <Link className="text-blue-500">vào đây</Link> để đăng
                                tin lần đầu với nhiều ưu đãi.
                            </td>
                        </tr>
                    ) : (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{item.thoiGian}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.loaiChuyenMuc}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.maTinDang}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.loaiTin}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.soDu}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.phi}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.conLai}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.trangThai}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
