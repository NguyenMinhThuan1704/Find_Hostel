import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import config from 'config';

const cx = classNames.bind(styles);

const menuItems = [
    { icon: faUser, title: 'Thông tin cá nhân' },
    { icon: faClipboardList, title: 'Quản lý bài đăng' },
    { icon: faCreditCard, title: 'Nạp tiền' },
    { icon: faCommentDollar, title: 'Lịch sử nạp tiền' },
    { icon: faClockRotateLeft, title: 'Lịch sử thanh toán' },
    { icon: faComment, title: 'Liên hệ' },
    { icon: faArrowRightToBracket, title: 'Thoát' },
];

function Sidebar({ isOpen, onClose }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transform transition-transform duration-300 z-30 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 w-[280px]`}
        >
            <div className="space-y-4 pb-4 border-b border-[#434a60]">
                <div className="flex justify-center">
                    <Link to={config.routes.home}>
                        <Image className="w-[204px]" src={img.header.logo_phongtro} />
                    </Link>
                </div>
            </div>

            <div className={cx('py-4')}>
                {menuItems.map((item, index) => (
                    <BtnItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Sidebar;
