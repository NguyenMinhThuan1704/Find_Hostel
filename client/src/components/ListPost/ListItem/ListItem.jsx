import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'components/Image';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from 'utils/Common/formatVietnameseToString';

function ListItem({ post }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const renderStars = (num) => {
        return Array(num)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="text-yellow-500">
                    ★
                </span>
            ));
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const img = JSON.parse(post?.images.image);
    const des = JSON.parse(post?.description).join(' ');

    return (
        <div className="p-4 bg-[#fff9f3] border border-solid border-[#E13427] border-x-0 max-h-[265px]">
            <div className="flex">
                <div className="w-2/5 relative">
                    <Link to={`chi-tiet/${formatVietnameseToString(post.title?.replaceAll('/', ''))}/${post.id}`}>
                        <Image className="w-[280px] h-[240px] p-4 object-cover rounded-3xl" src={img[0]} />
                        <div className="absolute left-[16px] bottom-[20px] text-white px-2 bg-overlay-30">
                            {img.length} ảnh
                        </div>
                    </Link>
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleClick}
                        className="absolute right-[30px] bottom-[16px] text-[24px] cursor-pointer"
                        title="Lưu tin này"
                    >
                        {isClicked ? (
                            <FontAwesomeIcon className="text-red-500" icon={SolidHeart} />
                        ) : isHovered ? (
                            <FontAwesomeIcon className="text-red-500" icon={SolidHeart} />
                        ) : (
                            <FontAwesomeIcon className="text-zinc-400" icon={faHeart} />
                        )}
                    </div>
                </div>
                <div className="w-3/5 py-3">
                    <Link to={`chi-tiet/${formatVietnameseToString(post.title?.replaceAll('/', ''))}/${post.id}`}>
                        <div className="text-red-500 line-clamp-2 hover:underline">
                            {renderStars(+post.star || 0)} {post.title}
                        </div>
                    </Link>
                    <div className="flex h-[20px] justify-between my-4">
                        <p className="w-[35%] font-bold text-green-500">{post.priceNumber} triệu đồng/tháng</p>
                        <p className="w-[15%]">{post.areaNumber} m2</p>
                        <p className="w-1/2 line-clamp-1 hover:underline" title={post.address}>
                            <Link>{`${post.address.split(',')[post.address.split(',').length - 2]},${post.address.split(',')[post.address.split(',').length - 1]}`}</Link>
                        </p>
                    </div>
                    <div className="flex justify-end mr-4 my-4">
                        <p>{post.createdAt}</p>
                    </div>
                    <div>
                        <p className="line-clamp-2 text-[14px] text-[#8a8d91]">{des}</p>
                    </div>
                    <div className="my-4 flex justify-between">
                        <div className="flex items-center w-[45%]">
                            <Image className="w-[40px] h-[40px] rounded-full border border-solid mr-4" src="eqeqweq" />
                            <p className="line-clamp-1 max-w-[140px]" title={post.user.name}>
                                {post.user.name === null ? 'No name' : post.user.name}
                            </p>
                        </div>

                        <button className="w-[30%] bg-blue-600 text-white rounded-2xl">
                            <Link target="_blank" className="text-white" to={`tel:${post.user.phone}`}>
                                Gọi {post.user.phone === null ? 'No phone' : post.user.phone}
                            </Link>
                        </button>
                        <button className="w-[20%] text-blue-600 border-blue-600 border border-solid rounded-2xl hover:bg-blue-600 hover:text-white">
                            <Link target="_blank" className="hover:text-white" to={`https://zalo.me/${post.user.zalo}`}>
                                {' '}
                                Nhắn zalo
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
