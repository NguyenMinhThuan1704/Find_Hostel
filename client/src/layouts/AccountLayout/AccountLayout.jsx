import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'layouts/components/Account/Header';
import Sidebar from 'layouts/components/Account/Sidebar';
import Support from 'layouts/components/User/Support';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
    faUser,
    faArrowRightToBracket,
    faClipboardList,
    faCreditCard,
    faCommentDollar,
    faClockRotateLeft,
    faComment,
} from '@fortawesome/free-solid-svg-icons';
import config from 'config';

const menuItems = [
    { to: `${config.routes.postManage}`, icon: faClipboardList, title: 'Quản lý bài đăng' },
    { to: `${config.routes.profile}`, icon: faUser, title: 'Thông tin cá nhân' },
    // { to: `${config.routes.profile}`, icon: faCreditCard, title: 'Nạp tiền' },
    { to: `${config.routes.rechargeHistory}`, icon: faCommentDollar, title: 'Lịch sử nạp tiền' },
    { to: `${config.routes.paymentHistory}`, icon: faClockRotateLeft, title: 'Lịch sử thanh toán' },
    { to: `${config.routes.contact}`, icon: faComment, title: 'Liên hệ' },
    { to: `${config.routes.logout}`, icon: faArrowRightToBracket, title: 'Thoát' },
];

function AccountLayout({ children }) {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    if (!isLoggedIn) return <Navigate to={config.routes.login} replace={true} />;

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar menuItems={menuItems} isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden" onClick={handleSidebarToggle} />
            )}
            <div className="flex flex-col flex-1">
                <Header onSidebarToggle={handleSidebarToggle} />
                <div className="flex-1 overflow-y-auto mt-[58px] bg-gray-100 sm:mt-0 md:ml-[240px]">{children}</div>
            </div>
            <Support />
        </div>
    );
}

AccountLayout.propTypes = { children: PropTypes.node.isRequired };

export default AccountLayout;
