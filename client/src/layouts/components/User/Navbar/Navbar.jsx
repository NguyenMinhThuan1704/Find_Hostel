import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'components/Image';
import img from 'assets/img';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const menuPcItems = [
        'Trang chủ',
        'Cho thuê phòng trọ',
        'Nhà cho thuê',
        'Cho thuê căn hộ',
        'Cho thuê Mặt bằng',
        'Tìm người ở ghép',
        'Tin tức',
        'Bảng giá dịch vụ',
    ];

    const menumbItems = [...menuPcItems, 'Yêu thích', 'Đăng tin miễm phí', 'Đăng nhập'];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative bg-slate-500 sm:bg-blue-600 flex justify-between px-[82px]">
            {/* PC Navbar */}
            <div className="hidden sm:flex flex-1 justify-between">
                {menuPcItems.map((item) => (
                    <Link
                        key={item}
                        onClick={() => setActiveItem(item)}
                        className={`flex-1 text-center px-3.5 py-3.5 cursor-pointer text-white ${
                            activeItem === item ? 'bg-[#f73859]' : 'hover:bg-[#f73859]'
                        }`}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="w-full sm:hidden flex items-center justify-between">
                <Image className="" src={img.header.logo_phongtro} />
                <button onClick={toggleMenu} className="text-white text-[22px]">
                    <FaBars />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-slate-500 z-50 transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out w-2/3 sm:hidden`}
            >
                <div className="flex flex-col">
                    {/* Close Icon and Logo with Bottom Border */}
                    <div className="flex items-center justify-between mb-4 border-b border-gray-300 p-3">
                        <Image className="w-[250px]" src={img.header.logo_phongtro} />
                        <button
                            onClick={closeMenu}
                            className="p-4 text-white text-2xl border border-solid border-white rounded-full"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {menumbItems.map((item) => (
                        <Link
                            key={item}
                            onClick={() => {
                                setActiveItem(item);
                                closeMenu(); // Close the menu after selection
                            }}
                            className={`px-6 py-4 text-white text-xl ${
                                activeItem === item ? 'bg-[#f73859]' : 'hover:bg-[#f73859]'
                            }`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
