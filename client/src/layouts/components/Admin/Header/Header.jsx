import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'components/Image';
import Menu from 'components/Popper/Menu';
import config from 'config';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { faBars, faFileInvoice, faGear, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';

function Header({ onSidebarToggle }) {
    const crUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Thông tin cá nhân',
            to: `${config.routes.profile}`,
        },
        {
            icon: <FontAwesomeIcon icon={faFileInvoice} />,
            title: 'Đơn hàng',
            to: `${config.routes.purchase}`,
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <div className="w-auto flex justify-between md:justify-end items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-10 md:ml-[280px]">
            <div className="md:hidden">
                <FontAwesomeIcon icon={faBars} onClick={onSidebarToggle} />
            </div>
            <p>
                {crUser ? (
                    <Menu items={userMenu} tptop="top-[2px]" tpleft="left-[4px]">
                        <Image
                            src=""
                            className="user-avatar w-[3.75rem] h-[3.75rem] ml-6 cursor-pointer rounded-full"
                            alt="Nguyen Minh Thuan"
                        />
                    </Menu>
                ) : (
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
