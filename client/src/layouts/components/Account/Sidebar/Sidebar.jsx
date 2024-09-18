import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import img from 'assets/img';
import BtnItem from './BtnItem';
import {
    faUser,
    faArrowRightToBracket,
    faClipboardList,
    faCreditCard,
    faCommentDollar,
    faClockRotateLeft,
    faComment,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import config from 'config';

const cx = classNames.bind(styles);

const menuItems = [
    { to: `${config.routes.profile}`, icon: faUser, title: 'Thông tin cá nhân' },
    { to: `${config.routes.postManage}`, icon: faClipboardList, title: 'Quản lý bài đăng' },
    { to: `${config.routes.profile}`, icon: faCreditCard, title: 'Nạp tiền' },
    { to: `${config.routes.rechargeHistory}`, icon: faCommentDollar, title: 'Lịch sử nạp tiền' },
    { to: `${config.routes.paymentHistory}`, icon: faClockRotateLeft, title: 'Lịch sử thanh toán' },
    { to: `${config.routes.contact}`, icon: faComment, title: 'Liên hệ' },
    { to: `${config.routes.home}`, icon: faArrowRightToBracket, title: 'Thoát' },
];

function Sidebar({ isOpen, onClose }) {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    const user = {
        id: 1,
        name: 'Nguyễn Minh Thuận',
        email: 'admin@example.com',
        phone: '0987654321',
        address: '123 Main St, Anytown, USA',
        avatar: 'dsadsadas',
        cash: '10.000.000 VNĐ',
    };

    useEffect(() => {
        const currentPath = location.pathname;
        const foundIndex = menuItems.findIndex((item) => item.to === currentPath);
        if (foundIndex !== -1) {
            setActiveIndex(foundIndex);
        }
    }, [location.pathname]);

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transform transition-transform duration-300 z-30 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 w-[240px] flex flex-col justify-between`}
        >
            <div>
                <div className="space-y-4 pb-4 border-b border-[#434a60]">
                    <div className="flex justify-center">
                        <Link to={config.routes.home}>
                            <Image className="w-[204px]" src={img.header.logo_phongtro} />
                        </Link>
                    </div>
                </div>

                <div className={cx('py-4')}>
                    {menuItems.map((item, index) => (
                        <Link to={item.to} key={index} onClick={onClose}>
                            <BtnItem
                                icon={item.icon}
                                title={item.title}
                                isActive={activeIndex === index}
                                onClick={() => setActiveIndex(index)}
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex justify-between p-8">
                    <Link>
                        <button className="p-4 rounded-lg bg-yellow-400 hover:bg-yellow-600 text-black">
                            Nạp tiền
                        </button>
                    </Link>
                    <Link>
                        <button className="p-4 rounded-lg bg-red-700 hover:bg-red-900 text-white">Đăng tin</button>
                    </Link>
                </div>
                <div className="flex items-center mb-4">
                    <div className="mr-4">
                        <Image className="rounded-full w-[50px] h-[50px]" src={user.avatar} />
                    </div>
                    <div>
                        <strong className="line-clamp-1 max-w-[160px]">{user.name}</strong>
                        <p>{user.phone}</p>
                    </div>
                </div>
                <div>
                    <p>Mã thành viên: {user.id}</p>
                    <p className="line-clamp-1">TK chính: {user.cash}</p>
                </div>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sidebar;
