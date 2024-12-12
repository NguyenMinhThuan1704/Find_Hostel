/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Image from 'components/Image';
import img from 'assets/img';
import BtnItem from './BtnItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import config from 'config';
import * as actions from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Sidebar({ isOpen, onClose, menuItems, isAdmin }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const { currentData } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(actions.logout());
        navigate(config.routes.login);
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
            } md:translate-x-0 w-[240px] flex flex-col justify-between overflow-y-auto`}
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
                    {menuItems.map((item, index) => {
                        const handleClick = () => {
                            setActiveIndex(index);
                            if (item.title === 'Thoát') {
                                handleLogout();
                                onClose();
                            } else {
                                onClose();
                            }
                        };

                        return (
                            <div key={index}>
                                {item.title === 'Thoát' ? (
                                    <div
                                        onClick={handleClick}
                                        className={cx('item', {
                                            btn__active: activeIndex === index,
                                        })}
                                    >
                                        <BtnItem
                                            icon={item.icon}
                                            title={item.title}
                                            isActive={activeIndex === index}
                                            onClick={handleClick}
                                        />
                                    </div>
                                ) : (
                                    <Link to={item.to}>
                                        <div
                                            onClick={handleClick}
                                            className={cx('item', {
                                                btn__active: activeIndex === index,
                                            })}
                                        >
                                            <BtnItem
                                                icon={item.icon}
                                                title={item.title}
                                                isActive={activeIndex === index}
                                                onClick={handleClick}
                                            />
                                        </div>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                {!isAdmin && (
                    <div className="flex justify-between mb-4">
                        <Link>
                            <button className="p-4 rounded-lg bg-yellow-400 hover:bg-yellow-600 text-black">
                                Nạp tiền
                            </button>
                        </Link>
                        <Link>
                            <button className="p-4 rounded-lg bg-red-700 hover:bg-red-900 text-white">Đăng tin</button>
                        </Link>
                    </div>
                )}
                <div className="flex items-center mb-4">
                    <div className="mr-4">
                        <Image className="rounded-full w-[50px] h-[50px]" src={currentData.avatar || 'dsadassa'} />
                    </div>
                    <div>
                        <strong className="line-clamp-1 max-w-[160px]">{currentData.name}</strong>
                        <p>{currentData.phone}</p>
                    </div>
                </div>
                <div>
                    <p className="line-clamp-1">Mã thành viên: {currentData.id}</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
