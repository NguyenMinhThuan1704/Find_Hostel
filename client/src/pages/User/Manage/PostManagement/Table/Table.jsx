import Image from 'components/Image';
import React from 'react';
import { Link } from 'react-router-dom';

function Table({ data }) {
    return (
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
                                <td className="border border-gray-300 px-4 py-2">
                                    <p className="line-clamp-1">{item.id}</p>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Image
                                        src={JSON.parse(item.images.image)[0] || 'S'}
                                        alt="Ảnh đại diện"
                                        className="w-40 h-40 object-cover"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.priceNumber} triệu/tháng</td>
                                <td className="border border-gray-300 px-4 py-2">{item.postPackages.startDay}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.postPackages.endDay}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.postPackages.status}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
