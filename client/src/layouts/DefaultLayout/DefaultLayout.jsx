import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from 'layouts/components/User/Header';
import Navbar from 'layouts/components/User/Navbar';
import Contact from 'layouts/components/User/Contact';
import Support from 'layouts/components/User/Support';
import Footer from 'layouts/components/User/Footer';
import Search from 'layouts/components/User/Search';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper', 'bg-[#f5f5f5]')}>
            <Header />
            <Navbar />
            <Search />
            <div className={cx('container')}>
                <div className={cx('content', 'sm:mx-[100px]')}>{children}</div>
            </div>
            <Contact />
            <Support />
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = { children: PropTypes.node.isRequired };

export default DefaultLayout;
