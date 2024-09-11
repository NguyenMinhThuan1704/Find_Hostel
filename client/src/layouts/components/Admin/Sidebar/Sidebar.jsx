import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import img from 'assets/img';
import BtnItem from './BtnItem';
import { faTachometerAlt, faCog, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const menuItems = [
    { icon: faTachometerAlt, title: 'Tổng quan' },
    { icon: faUser, title: 'Thông tin cá nhân' },
    { icon: faFileAlt, title: 'Đơn hàng' },
    { icon: faCog, title: 'Cài đặt' },
];

function Sidebar({ isOpen, onClose }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transform transition-transform duration-300 z-30 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 w-[280px]`}
        >
            <div className="space-y-4 pb-8 border-b border-[#434a60]">
                <div className="flex justify-center">
                    <Image className="w-[100px]" src={img.header.logo} />
                    {/* <div className="md:hidden" onClick={onClose}>
                        Close Sidebar
                    </div> */}
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
