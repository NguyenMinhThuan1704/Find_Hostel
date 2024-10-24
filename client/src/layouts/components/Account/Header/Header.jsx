import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'components/Image';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Header({ onSidebarToggle }) {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return (
        <div className="w-auto sm:hidden flex justify-between md:justify-end items-center p-3 bg-white shadow-md fixed top-0 left-0 right-0 z-10 md:ml-[280px]">
            <div className="md:hidden">
                <FontAwesomeIcon icon={faBars} onClick={onSidebarToggle} />
            </div>
            <p>
                {isLoggedIn ? (
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
