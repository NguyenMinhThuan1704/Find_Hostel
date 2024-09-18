import React from 'react';
import { Link } from 'react-router-dom';

function Table({ data }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Mã tin</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Ảnh đại diện</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Tiêu đề</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Giá</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Ngày bắt đầu</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Ngày hết hạn</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                Bạn chưa có tin đăng nào. Bấm <Link className="text-blue-500">vào đây</Link> để bắt đầu
                                đăng tin.
                            </td>
                        </tr>
                    ) : (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{item.maTin}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={item.anhDaiDien} alt="Ảnh đại diện" className="w-16 h-16 object-cover" />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{item.tieuDe}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.gia}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.ngayBatDau}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.ngayHetHan}</td>
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
