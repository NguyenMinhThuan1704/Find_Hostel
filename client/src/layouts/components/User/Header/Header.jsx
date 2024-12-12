/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from 'components/Image';
import img from 'assets/img';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faHeart,
    faPlus,
    faUserPlus,
    faGear,
    faSignOut,
    faUser,
    faPencil,
    faClipboardList,
    faCreditCard,
    faCommentDollar,
} from '@fortawesome/free-solid-svg-icons';
import * as actions from 'store/actions';
import Button from 'components/Button';
import config from 'config';
import Menu from 'components/Popper/Menu';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { currentData } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(actions.logout());
    };

    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispatch(actions.getCurrent());
        }, 100);
    }, [isLoggedIn]);

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Quản lý tài khoản',
            to: `${config.routes.profile}`,
        },
        {
            icon: <FontAwesomeIcon icon={faPencil} />,
            title: 'Đăng tin cho thuê',
            to: `${config.routes.createPost}`,
        },
        {
            icon: <FontAwesomeIcon icon={faClipboardList} />,
            title: 'Quản lý đăng tin',
            to: `${config.routes.postManage}`,
        },
        // {
        //     icon: <FontAwesomeIcon icon={faCreditCard} />,
        //     title: 'Nạp tiền',
        //     to: `${config.routes.recharge}`,
        // },
        {
            icon: <FontAwesomeIcon icon={faCommentDollar} />,
            title: 'Lịch sử nạp tiền',
            to: `${config.routes.rechargeHistory}`,
        },
        // {
        //     icon: <FontAwesomeIcon icon={faHeart} />,
        //     title: 'Tin đã lưu',
        //     to: `${config.routes.profile}`,
        // },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            onClick: handleLogout,
            to: '/',
            separate: true,
        },
    ];

    return (
        <div className={cx('hidden', 'sm:flex', 'justify-between', 'h-[70px]', 'px-[100px]')}>
            <Link to={config.routes.home}>
                <Image className="w-[240px] h-full" src={img.header.logo_phongtro}></Image>
            </Link>
            <div className="flex items-center">
                {/* <Link to={config.routes.rentalRoom} className="flex justify-center items-center p-4 hover:underline">
                    <FontAwesomeIcon icon={faHeart} />
                    <p className="ml-2">Yêu thích</p>
                </Link> */}
                {isLoggedIn ? (
                    <>
                        <Menu items={userMenu}>
                            <Image
                                src={currentData.avatar}
                                className={cx(
                                    'user-avatar',
                                    'w-[32px]',
                                    'h-[32px]',
                                    'ml-6',
                                    'mr-[6px]',
                                    'cursor-pointer',
                                    'rounded-full',
                                    'border',
                                    'border-black',
                                    'border-solid',
                                    'hidden',
                                    'md:block',
                                )}
                                alt="Nguyen Minh Thuan"
                            ></Image>
                        </Menu>
                        <p className="mr-8 line-clamp-1 max-w-[134px]" title={currentData.name}>
                            {currentData.name}
                        </p>
                    </>
                ) : (
                    <p className="flex items-center">
                        <Link to={config.routes.login} className="flex justify-center items-center p-4 hover:underline">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <p className="ml-2">Đăng nhập</p>
                        </Link>
                        <Link
                            to={config.routes.register}
                            className="flex justify-center items-center p-4 pr-8 hover:underline"
                        >
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                            <p className="ml-2">Đăng ký</p>
                        </Link>
                    </p>
                )}

                <Button to={config.routes.createPost} className="bg-[#f73859] w-auto h-[40px] hover:underline">
                    <div className="flex text-white">
                        <p className="mr-2">Đăng ký miễn phí</p>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </Button>
            </div>
        </div>
    );
}

export default Header;
