import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'layouts/components/Account/Header';
import Sidebar from 'layouts/components/Account/Sidebar';

function AccountLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden" onClick={handleSidebarToggle} />
            )}
            <div className="flex flex-col flex-1">
                <Header onSidebarToggle={handleSidebarToggle} />
                <div className="flex-1 overflow-y-auto p-4 bg-gray-100 md:ml-[280px]">{children}</div>
            </div>
        </div>
    );
}

AccountLayout.propTypes = { children: PropTypes.node.isRequired };

export default AccountLayout;
