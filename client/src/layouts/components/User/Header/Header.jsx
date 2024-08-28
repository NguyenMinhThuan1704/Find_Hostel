import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from 'components/Image';
import img from 'assets/img';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faHeart, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
import config from 'config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('hidden', 'sm:flex', 'justify-between', 'h-[70px]', 'px-[100px]')}>
            <Link>
                <Image className="w-[240px] h-full" src={img.header.logo_phongtro}></Image>
            </Link>
            <div className="flex items-center">
                <Link className="flex justify-center items-center p-4 hover:underline">
                    <FontAwesomeIcon icon={faHeart} />
                    <p className="ml-2">Yêu thích</p>
                </Link>
                <Link to={config.routes.login} className="flex justify-center items-center p-4 hover:underline">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <p className="ml-2">Đăng nhập</p>
                </Link>
                <Link to={config.routes.register} className="flex justify-center items-center p-4 pr-8 hover:underline">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    <p className="ml-2">Đăng ký</p>
                </Link>
                <Button className="bg-[#f73859] w-auto h-[40px] hover:underline">
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
