import Image from 'components/Image';
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/vi';

function NewPostItem({ data }) {
    const img = JSON.parse(data?.image);

    const renderStars = (num) => {
        return Array(num)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="text-yellow-500">
                    ★
                </span>
            ));
    };

    const formatTime = (createdAt) => {
        return moment(createdAt).fromNow();
    };

    return (
        <Link to="#" className="flex items-start space-x-3 group pb-4 border-b border-[#eee]">
            <Image src={img[0]} alt={data.title} className="w-[60px] h-[60px] object-cover rounded-md" />

            <div className="flex-1">
                <h3
                    className="text-[14px] font-bold line-clamp-2 text-gray-800 group-hover:text-blue-600 leading-snug"
                    title={data.title}
                >
                    {renderStars(+data.star || 0)} {data.title}
                </h3>
                <div className="flex justify-between">
                    <p className="text-green-600 text-[13px] font-semibold">{data.priceNumber} triệu đồng/tháng</p>
                    <p className="text-gray-500 text-[12px]">{formatTime(data.createdAt)}</p>
                </div>
            </div>
        </Link>
    );
}

export default NewPostItem;
