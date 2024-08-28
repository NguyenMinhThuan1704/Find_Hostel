import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="sm:mx-[100px]">
            <div className="bg-white p-8 sm:p-24 rounded-xl border text-center">
                <strong className="text-[20px]">Tại sao lại chọn PhongTro123.com?</strong>
                <p className="my-6">
                    Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào là trang web đứng top google
                    về các từ khóa:{' '}
                    <Link title="Cho thuê phòng trọ">
                        <strong className="text-blue-700 hover:text-orange-600">cho thuê phòng trọ</strong>
                    </Link>
                    , <strong>nhà trọ</strong>,{' '}
                    <Link title="Cho thuê nhà nguyên căn">
                        <strong className="text-blue-700 hover:text-orange-600">thuê nhà nguyên căn</strong>
                    </Link>
                    ,{' '}
                    <Link title="Cho thuê căn hộ">
                        <strong className="text-blue-700 hover:text-orange-600">cho thuê căn hộ</strong>
                    </Link>
                    ,{' '}
                    <Link title="Tìm người ở ghép">
                        <strong className="text-blue-700 hover:text-orange-600">tìm người ở ghép</strong>
                    </Link>
                    ,{' '}
                    <Link title="Cho thuê mặt bằng">
                        <strong className="text-blue-700 hover:text-orange-600">cho thuê mặt bằng</strong>
                    </Link>{' '}
                    ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch
                    nhanh hơn, tiết kiệm chi phí hơn.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="flex flex-col items-center">
                        <span className="text-[2.5rem] font-bold">116.998+</span>
                        <span>Thành viên</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[2.5rem] font-bold">103.348+</span>
                        <span>Tin đăng</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[2.5rem] font-bold">300.000+</span>
                        <span>Lượt truy cập/tháng</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[2.5rem] font-bold">2.500.000+</span>
                        <span>Lượt xem/tháng</span>
                    </div>
                </div>

                <strong className="text-[20px]">Chi phí thấp, hiệu quả tối đa</strong>
                <div className="my-6">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[18px]" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[18px]" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[18px]" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[18px]" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-[18px]" />
                </div>
                <p className="italic">
                    "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho
                    thuê: từ việc phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao. Từ khi
                    biết website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi
                    phí khá thấp, không còn tình trạng phòng trống kéo dài."
                </p>
                <p className="my-6">Anh Khánh (chủ hệ thống phòng trọ tại Tp Hà Nội)</p>
                <strong className="text-[20px]">Bạn đang có phòng trọ / căn hộ cho thuê?</strong>
                <p className="my-6">Không phải lo tìm người cho thuê, phòng trống kéo dài</p>
                <div className="flex justify-center">
                    <Button className="bg-[#f73859] w-auto h-[40px] hover:underline">
                        <div className="flex text-white">
                            <p className="mr-2 font-bold text-[16px]">Đăng ký ngay</p>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
