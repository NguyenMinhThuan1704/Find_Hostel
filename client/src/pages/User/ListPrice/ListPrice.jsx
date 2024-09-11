import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TablePrice from './TablePrice';

function ListPrice() {
    const pricingPlans = [
        {
            title: 'Tin VIP nổi bật',
            stars: 5,
            priceDay: '50.000đ',
            priceWeek: '315.000đ',
            priceMonth: {
                original: '1.500.000đ',
                discounted: '1.200.000đ',
                discountNote: 'Giảm 20% chỉ còn',
            },
            boostPrice: '5.000đ',
            titleColor: 'TIÊU ĐỀ MÀU ĐỎ, IN HOA',
            autoApprove: true,
            showPhone: true,
            highlightBadge: true,
            buttonLabel: 'Xem demo',
            buttonLink: '#',
            color: 'bg-red-500',
        },
        {
            title: 'Tin VIP 1',
            stars: 4,
            priceDay: '30.000đ',
            priceWeek: '190.000đ',
            priceMonth: {
                original: '900.000đ',
                discounted: '800.000đ',
                discountNote: 'Giảm 11% chỉ còn',
            },
            boostPrice: '3.000đ',
            titleColor: 'TIÊU ĐỀ MÀU HỒNG, IN HOA',
            autoApprove: false,
            showPhone: true,
            highlightBadge: false,
            buttonLabel: 'Xem demo',
            buttonLink: '#',
            color: 'bg-pink-500',
        },
        {
            title: 'Tin VIP 2',
            stars: 3,
            priceDay: '20.000đ',
            priceWeek: '133.000đ',
            priceMonth: {
                original: '600.000đ',
                discounted: '540.000đ',
                discountNote: 'Giảm 10% chỉ còn',
            },
            boostPrice: '2.000đ',
            titleColor: 'TIÊU ĐỀ MÀU CAM, IN HOA',
            autoApprove: true,
            showPhone: false,
            highlightBadge: true,
            buttonLabel: 'Xem demo',
            buttonLink: '#',
            color: 'bg-orange-500',
        },
        {
            title: 'Tin VIP 3',
            stars: 2,
            priceDay: '10.000đ',
            priceWeek: '63.000đ',
            priceMonth: {
                original: '300.000đ',
                discounted: '240.000đ',
                discountNote: 'Giảm 20% chỉ còn',
            },
            boostPrice: '2.000đ',
            titleColor: 'TIÊU ĐỀ MÀU XANH, IN HOA',
            autoApprove: true,
            showPhone: false,
            highlightBadge: true,
            buttonLabel: 'Xem demo',
            buttonLink: '#',
            color: 'bg-blue-500',
        },
    ];

    return (
        <div>
            <h1 className="text-center font-bold">Giới thiệu phongtro123.com</h1>
            <div className="bg-white rounded-2xl shadow-xl">
                <div className="px-6 py-10 text-[14px]">
                    <p>
                        ĐỪNG ĐỂ PHÒNG TRỐNG THÊM BẤT CỨ NGÀY NÀO!, đăng tin ngay tại PHONGTRO123.COM và tất cả các vấn
                        đề sẽ được giải quyết một cách nhanh nhất.
                    </p>
                    <p className="my-4">ƯU ĐIỂM PHONGTRO123:</p>
                    <div className="flex gap-4 items-center my-6">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-[20px]" />
                        <p>
                            <strong>Top đầu google</strong> về từ khóa: cho thuê phòng trọ, thuê phòng trọ, phòng trọ hồ
                            chí minh, phòng trọ hà nội, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép…với lưu
                            lượng truy cập (traffic) cao nhất trong lĩnh vực.
                        </p>
                    </div>
                    <div className="flex gap-4 items-center my-6">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-[20px]" />
                        <p>
                            Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ
                            với hơn <strong>103.348</strong> tin trên hệ thống và tiếp tục tăng.
                        </p>
                    </div>
                    <div className="flex gap-4 items-center my-6">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-[20px]" />
                        <p>
                            Phongtro123.com tự hào có số lượng người dùng lớn nhất trong lĩnh vực cho thuê phòng trọ với
                            hơn <strong>300.000</strong> khách truy cập thường xuyên và hơn <strong>2.500.000</strong>{' '}
                            lượt pageview mỗi tháng.
                        </p>
                    </div>
                    <div className="flex gap-4 items-center my-6">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-[20px]" />
                        <p>
                            Phongtro123.com tự hào được sự tin tưởng sử dụng của hơn <strong>116.998 khách hàng</strong>{' '}
                            là chủ nhà, đại lý, môi giới đăng tin thường xuyên tại website.
                        </p>
                    </div>
                    <div className="flex gap-4 items-center my-6">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 text-[20px]" />
                        <p>
                            Phongtro123.com tự hào ghi nhận <strong>88.879</strong> giao dịch thành công khi sử dụng
                            dịch vụ tại web, mức độ <strong>hiệu quả đạt xấp xỉ 85% tổng tin đăng</strong>.
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="text-center font-bold">Bảng giá dịch vụ</h1>
            <h2 className="text-center">Áp dụng từ ngày 31/05/2024</h2>
            <TablePrice pricingPlans={pricingPlans} />
        </div>
    );
}

export default ListPrice;
