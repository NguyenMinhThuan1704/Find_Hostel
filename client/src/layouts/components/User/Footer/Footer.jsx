import Image from 'components/Image';
import React from 'react';
import { Link } from 'react-router-dom';
import img from 'assets/img';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 pt-10 sm:px-[100px] mt-10">
            <div className="container mx-auto sm:px-4">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div className="w-full sm:w-[34%] mb-4 sm:pr-[20px] text-center sm:text-left">
                        <Image className="w-[220px] h-[70px] mx-auto sm:mx-0" src={img.header.logo_phongtro} />
                        <p>
                            Phòng trọ 123 tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ.
                        </p>
                    </div>

                    <div className="flex sm:w-[44%]">
                        <div className="w-full sm:w-[50%] mb-4 text-center sm:text-left">
                            <h1 className="text-[14px] font-bold text-gray-900 mb-2">Về PHONGTRO123.COM</h1>
                            <ul>
                                {[
                                    'Trang chủ',
                                    'Giới thiệu',
                                    'Blog',
                                    'Quy chế hoạt động',
                                    'Quy định sử dụng',
                                    'Chính sách bảo mật',
                                    'Liên hệ',
                                ].map((item) => (
                                    <li key={item} className="mb-2">
                                        <Link to="#" className="hover:underline">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full sm:w-[50%] mb-4 text-center sm:text-left">
                            <h1 className="text-[14px] font-bold text-gray-900 mb-2">Hỗ trợ khách hàng</h1>
                            <ul>
                                {[
                                    'Câu hỏi thường gặp',
                                    'Hướng dẫn đăng tin',
                                    'Bảng giá dịch vụ',
                                    'Quy định đăng tin',
                                    'Giải quyết khiếu nại',
                                ].map((item) => (
                                    <li key={item} className="mb-2">
                                        <Link to="#" className="hover:underline">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-[22%] mb-4 text-center sm:text-left">
                        <h1 className="text-[14px] font-bold text-gray-900 mb-2">Liên hệ với chúng tôi</h1>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <Link href="#" className="hover:underline">
                                <Image className="w-[35px] h-[35px]" src={img.footer.fb} />
                            </Link>
                            <Link href="#" className="hover:underline">
                                <Image className="w-[35px] h-[35px]" src={img.footer.yt} />
                            </Link>
                            <Link href="#" className="hover:underline">
                                <Image className="w-[35px] h-[35px]" src={img.footer.zl} />
                            </Link>
                            <Link href="#" className="hover:underline">
                                <Image className="w-[35px] h-[35px]" src={img.footer.tw} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-10 py-10 text-center flex flex-col lg:flex-row items-center">
                    <span className="flex-1 mb-4 lg:mb-0 lg:justify-center px-4">
                        <p className="font-bold">Cùng hệ thống LBKCorp:</p>
                    </span>
                    {[
                        { href: '#', src: img.footer.bds },
                        { href: '#', src: img.footer.chothuenha },
                        { href: '#', src: img.footer.thuecanho },
                        { href: '#', src: img.header.logo_phongtro },
                    ].map(({ href, src }) => (
                        <Link key={src} to={href} className="flex-1 px-4 mb-4 lg:mb-0">
                            <Image className="mx-auto lg:mx-0 mt-4 w-[200px] sm:mt-0" src={src} alt="" />
                        </Link>
                    ))}
                </div>

                <div className="border-t py-6 text-center">
                    <p className="text-[14px] pt-4 text-gray-900">CÔNG TY TNHH LBKCORP</p>
                    <p className="text-[14px] pt-4 text-gray-900">Tổng đài CSKH: 0917686101</p>
                    <p className="text-[14px] pt-4 text-gray-500">Copyright © 2015 - 2024 Phongtro123.com</p>
                    <p className="text-[14px] pt-4 text-gray-500">Email: cskh.phongtro123@gmail.com</p>
                    <p className="text-[14px] pt-4 text-gray-500">
                        Địa chỉ: Căn 02.34, Lầu 2, Tháp 3, The Sun Avenue, Số 28 Mai Chí Thọ, Phường An Phú, Thành phố
                        Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                    </p>
                    <p className="text-[14px] pt-4 text-gray-500">
                        Giấy phép đăng ký kinh doanh số 0313588502 do Sở kế hoạch và Đầu tư thành phố Hồ Chí Minh cấp
                        ngày 24 tháng 12 năm 2015.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
