import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'components/Image';
import img from 'assets/img';
import { apiGetAllCategories } from 'services/categories';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { formatVietnameseToString } from 'utils/Common/formatVietnameseToString';

const cx = classNames.bind(styles);

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await apiGetAllCategories();
            if (response?.data.err === 0) {
                setCategories(response.data.response);
            }
        };
        fetchCategories();
    }, []);

    const menuPcItems = [
        { title: 'Trang chủ', path: '/', code: 'TC' },
        ...categories.map((item) => ({
            id: item.id,
            title: item.value,
            path: `/${formatVietnameseToString(item.value)}`,
            code: item.code,
        })),
        { title: 'Tìm người ở ghép', path: '/tim-nguoi-o-ghep', code: 'TNOG' },
        { title: 'Tin tức', path: '/tin-tuc', code: 'TT' },
        { title: 'Bảng giá dịch vụ', path: '/bang-gia-dich-vu', code: 'BGDV' },
    ];

    const menumbItems = [...menuPcItems.map((item) => item.title), 'Yêu thích', 'Đăng tin miễm phí', 'Đăng nhập'];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative bg-slate-500 sm:bg-blue-600 flex justify-between px-8 sm:px-[82px]">
            {/* PC Navbar */}
            <div
                className="hidden sm:grid gap-4 flex-1 justify-between"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))', gap: 0 }}
            >
                {menuPcItems.map((item) => (
                    <NavLink
                        key={item.code}
                        to={item.path}
                        className={(navData) =>
                            cx('flex-1 text-center px-3.5 py-3.5 cursor-pointer text-white', {
                                'bg-[#f73859]': navData.isActive,
                                'hover:bg-[#f73859]': !navData.isActive,
                            })
                        }
                    >
                        {item.title}
                    </NavLink>
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

                    {menumbItems.map((item, index) => (
                        <Link
                            key={index}
                            to={menuPcItems[index]?.path || '#'} // Ensure correct paths are used
                            onClick={closeMenu}
                            className={`px-6 py-4 text-white text-xl ${
                                location.pathname === menuPcItems[index]?.path ? 'bg-[#f73859]' : 'hover:bg-[#f73859]'
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
