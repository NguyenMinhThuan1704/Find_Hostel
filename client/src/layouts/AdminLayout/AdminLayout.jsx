import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'layouts/components/Account/Header';
import Sidebar from 'layouts/components/Account/Sidebar';
import Support from 'layouts/components/User/Support';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
    faArrowRightToBracket,
    faArrowsUpDownLeftRight,
    faClipboardList,
    faComment,
    faCube,
    faList,
    faLocationDot,
    faMoneyCheckDollar,
    faPalette,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import config from 'config';

const menuItems = [
    // { to: `${config.routes.dashBoard}`, icon: faPalette, title: 'Bảng điều hướng' },
    { to: `${config.routes.typePostManagement}`, icon: faList, title: 'Quản lý loại bài đăng' },
    { to: `${config.routes.packageService}`, icon: faCube, title: 'Quản lý gói bài đăng' },
    { to: `${config.routes.postManagement}`, icon: faClipboardList, title: 'Quản lý bài đăng' },
    { to: `${config.routes.price}`, icon: faMoneyCheckDollar, title: 'Quản lý giá' },
    { to: `${config.routes.area}`, icon: faArrowsUpDownLeftRight, title: 'Quản lý diện tích' },
    { to: `${config.routes.province}`, icon: faLocationDot, title: 'Quản lý tỉnh thành' },
    { to: `${config.routes.province}`, icon: faUser, title: 'Quản lý tài khoản' },
    // { to: `${config.routes.contactAdmin}`, icon: faComment, title: 'Quản lý liên hệ' },
    { to: `${config.routes.logout}`, icon: faArrowRightToBracket, title: 'Thoát' },
];

function AccountLayout({ children }) {
    const isAdmin = true;
    const { isLoggedIn } = useSelector((state) => state.auth);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    if (!isLoggedIn) return <Navigate to={config.routes.login} replace={true} />;

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isAdmin={isAdmin} menuItems={menuItems} isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
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
