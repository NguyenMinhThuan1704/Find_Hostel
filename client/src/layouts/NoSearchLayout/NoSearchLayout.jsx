import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NoSearchLayout.module.scss';
import Header from 'layouts/components/User/Header';
import Navbar from 'layouts/components/User/Navbar';
import Contact from 'layouts/components/User/Contact';
import Support from 'layouts/components/User/Support';
import Footer from 'layouts/components/User/Footer';

const cx = classNames.bind(styles);

function NoSearchLayout({ children }) {
    return (
        <div className={cx('wrapper', 'bg-[#f5f5f5]')}>
            <Header />
            <Navbar />
            <div className={cx('containers')}>
                <div className={cx('content', 'sm:mx-[100px]')}>{children}</div>
            </div>
            <Contact />
            <Support />
            <Footer />
        </div>
    );
}

NoSearchLayout.propTypes = { children: PropTypes.node.isRequired };

export default NoSearchLayout;
