import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'components/Image';
// import Menu from 'components/Popper/Menu';
import config from 'config';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import {
    faHeart,
    faGear,
    faSignOut,
    faUser,
    faPencil,
    faClipboardList,
    faCreditCard,
    faCommentDollar,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import * as actions from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';

function Header({ onSidebarToggle }) {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(actions.logout());
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Quản lý tài khoản',
            to: `${config.routes.profile}`,
        },
        {
            icon: <FontAwesomeIcon icon={faPencil} />,
            title: 'Đăng tin cho thuê',
            to: `${config.routes.profile}`,
        },
        {
            icon: <FontAwesomeIcon icon={faClipboardList} />,
            title: 'Quản lý đăng tin',
            to: `${config.routes.profile}`,
        },
        {
            icon: <FontAwesomeIcon icon={faCreditCard} />,
            title: 'Nạp tiền',
            to: `${config.routes.profile}`,
        },
        {
            icon: <FontAwesomeIcon icon={faCommentDollar} />,
            title: 'Lịch sử nạp tiền',
            to: `${config.routes.profile}`,
        },
        {
            icon: <FontAwesomeIcon icon={faHeart} />,
            title: 'Tin đã lưu',
            to: `${config.routes.profile}`,
        },
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
        <div className="w-auto sm:hidden flex justify-between md:justify-end items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-10 md:ml-[280px]">
            <div className="md:hidden">
                <FontAwesomeIcon icon={faBars} onClick={onSidebarToggle} />
            </div>
            <p>
                {isLoggedIn ? (
                    // <Menu items={userMenu} tptop="top-[2px]" tpleft="left-[4px]">
                    <Image
                        src=""
                        className="user-avatar w-[3.75rem] h-[3.75rem] ml-6 cursor-pointer rounded-full"
                        alt="Nguyen Minh Thuan"
                    />
                ) : (
                    // </Menu>
                    <Tippy delay={[0, 50]} content="Đăng nhập" placement="bottom">
                        <div className="user hidden md:block">
                            <FontAwesomeIcon className="user-icon" icon={faUser} />
                        </div>
                    </Tippy>
                )}
            </p>
        </div>
    );
}

export default Header;
