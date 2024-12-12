/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsLimit } from 'store/actions';
import SlideSwiper from './Swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faChartArea,
    faHeart,
    faLocationDot,
    faPhone,
    faSackDollar,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'components/Image';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import config from 'config';
import NewPost from 'components/Sidebar/NewPost';
import * as actions from 'store/actions';

function DetailPost() {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { posts, newPosts } = useSelector((state) => state.post);

    useEffect(() => {
        if (postId) {
            dispatch(getPostsLimit({ id: postId }));
        }
    }, [postId]);

    useEffect(() => {
        dispatch(actions.getNewPosts('star'));
    }, []);

    const renderStars = (num) => {
        return Array(num)
            .fill(0)
            .map((_, i) => (
                <span key={i} className="text-yellow-500">
                    ★
                </span>
            ));
    };

    const imagesArray = posts[0]?.images?.image ? JSON.parse(posts[0].images.image) : [];
    const descriptionArray = posts[0]?.description ? JSON.parse(posts[0].description) : [];

    return (
        <div className="flex gap-4 mb-8">
            <div className="w-2/3 bg-white">
                <div className="flex items-center gap-4 my-6 px-4">
                    <Link to={config.routes.home} className="text-blue-600 underline w-[10%]">
                        Trang chủ
                    </Link>{' '}
                    <FontAwesomeIcon icon={faAngleRight} />{' '}
                    <p className="line-clamp-1 max-w-[600px]">{posts[0]?.title}</p>
                </div>
                <div className="flex">
                    <SlideSwiper img={imagesArray} />
                </div>
                <div className="p-8">
                    <p className="text-[28px] mb-4 line-clamp-2">
                        {' '}
                        {renderStars(+posts[0]?.postPackages?.packageService?.star || 0)} {posts[0]?.title}
                    </p>
                    <div className="flex gap-2 items-center mb-4">
                        <FontAwesomeIcon icon={faLocationDot} className="text-blue-600" />
                        <p>Địa chỉ: {posts[0].address}</p>
                    </div>
                    <div className="flex gap-16 mb-4">
                        <div className="flex gap-4 items-center">
                            <FontAwesomeIcon className="text-[20px]" icon={faSackDollar} />
                            <p className="text-green-600 text-[20px]">{posts[0].priceNumber} triệu/tháng</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <FontAwesomeIcon className="text-[20px]" icon={faChartArea} />
                            <p className="text-green-600 text-[20px]">
                                {posts[0].areaNumber} m<sup>2</sup>
                            </p>
                        </div>
                    </div>
                    <h2 className="text-[24px] font-bold mb-4">Thông tin mô tả</h2>
                    <ul className="space-y-10 mb-4">
                        {descriptionArray.map((item, index) => (
                            <li key={index} className="text-gray-700 text-[18px]">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-[24px] font-bold mb-4">Đặc điểm tin đăng</h2>
                    <table className="w-full text-[16px] text-left text-gray-500 mb-4">
                        <tbody>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Mã tin:</td>
                                <td className="p-4">{posts[0]?.id}</td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Chuyên mục:</td>
                                <td className="p-4">
                                    <Link href="#" className="text-blue-500 hover:underline">
                                        Cho thuê phòng trọ Quận Tân Bình
                                    </Link>
                                </td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Khu vực:</td>
                                <td className="p-4">Cho thuê phòng trọ Hồ Chí Minh</td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Loại tin rao:</td>
                                <td className="p-4">Phòng trọ, nhà trọ</td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Đối tượng thuê:</td>
                                <td className="p-4">Tất cả</td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Gói tin:</td>
                                <td className="p-4">
                                    <span className="text-pink-500">Tin VIP 1</span>
                                </td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Ngày đăng:</td>
                                <td className="p-4">Thứ 4, 16:02 16/10/2024</td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Ngày hết hạn:</td>
                                <td className="p-4">Thứ 4, 15:08 06/11/2024</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="text-[24px] font-bold mb-4">Thông tin liên hệ</h2>
                    <table className="w-full text-[16px] text-left text-gray-500">
                        <tbody>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Liên hệ:</td>
                                <td className="p-4">{posts[0]?.user.name}</td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Điện thoại:</td>
                                <td className="p-4">{posts[0]?.user.phone}</td>
                            </tr>
                            <tr className="even:bg-gray-100">
                                <td className="p-4 font-medium w-1/3 text-gray-900">Zalo:</td>
                                <td className="p-4">{posts[0]?.user.zalo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-1/3">
                <div className="bg-[#febb02]">
                    <div className="p-8 flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src={posts[0]?.user.avatar ? posts[0]?.user.avatar : 'noImage'}
                                className="rounded-full w-[100px] h-[100px]"
                            />
                            <p className="mt-2 font-bold text-3xl">{posts[0]?.user.name}</p>
                        </div>
                        <button className="flex px-8 py-4 gap-4 text-[22px] text-white bg-[#16c784] w-full rounded-xl items-center justify-center hover:bg-[#13bb7b]">
                            <FontAwesomeIcon icon={faPhone} />
                            <a href={`tel:${posts[0]?.user.phone || '0123456789'}`} className="font-bold text-white">
                                {posts[0]?.user.phone}
                            </a>
                        </button>
                        <button className="flex px-8 py-4 gap-4 text-[18px] text-black border border-solid bg-white w-full rounded-xl items-center justify-center hover:underline">
                            <FontAwesomeIcon icon={faFacebook} />
                            {posts[0]?.user.phone ? (
                                <a
                                    href={`https://zalo.me/${posts[0]?.user.phone}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mở Zalo
                                </a>
                            ) : (
                                <span>Không có số điện thoại</span>
                            )}
                        </button>
                        <button className="flex px-8 py-4 gap-4 text-[18px] text-black border border-solid bg-white w-full rounded-xl items-center justify-center hover:underline">
                            <FontAwesomeIcon icon={faHeart} />
                            <p className="font-bold">Yêu thích</p>
                        </button>
                    </div>
                </div>
                <NewPost data={newPosts} title="Tin nổi bật" />
            </div>
        </div>
    );
}

export default DetailPost;
