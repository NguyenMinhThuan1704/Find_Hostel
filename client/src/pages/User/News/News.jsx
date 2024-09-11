import Image from 'components/Image';
import Sidebar from 'components/Sidebar';
import React from 'react';
import { Link } from 'react-router-dom';

function News() {
    const newsData = {
        articles: [
            {
                img: 'https://example.com/image1.jpg',
                title: 'Vấn nạn an toàn phòng cháy chữa cháy tại các nhà trọ cho thuê',
                description: 'Quy định an toàn phòng cháy chữa cháy tại các nhà trọ cho thuê...',
            },
            {
                img: 'https://example.com/image2.jpg',
                title: 'Tiền đặt cọc thuê phòng trọ có lấy lại được không?',
                description: 'Tiền cọc thuê trọ có lấy lại được không? Team tư vấn của chúng tôi trả lời...',
            },
            {
                img: 'https://example.com/image3.jpg',
                title: 'Đóng tiền thuê phòng trọ đầu tháng hay cuối tháng?',
                description: 'Đóng tiền trọ đầu tháng hay cuối tháng là vấn đề được nhiều người quan tâm...',
            },
        ],
    };
    return (
        <div>
            <h1 className="font-bold">Tin tức thị trường, chia sẻ kinh nghiệm Bất động sản</h1>
            <div className="flex gap-4">
                <div className="bg-white border border-solid rounded-xl w-2/3">
                    <div className="p-5">
                        {newsData.articles.map((article, index) => (
                            <Link
                                to="#"
                                key={index}
                                className="flex items-start space-x-4 group mb-4 pb-4 border-b border-[#f1f1f1]" // Adjusting spacing and border
                            >
                                <Image
                                    src={article.img}
                                    alt={article.title}
                                    className="w-[140px] h-[140px] object-cover rounded-md"
                                />

                                <div className="flex-1">
                                    <h3 className="text-[20px] font-bold text-blue-600 group-hover:text-blue-800 leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-[14px] mt-2 leading-snug">{article.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-1/3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default News;
