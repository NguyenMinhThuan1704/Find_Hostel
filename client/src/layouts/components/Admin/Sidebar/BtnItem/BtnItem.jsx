import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function BtnItem({ icon, title, isActive, onClick }) {
    return (
        <button
            className={cx('w-full', 'px-[20px]', 'py-[12px]', 'rounded-[12px]', 'mb-2', {
                btn__active: isActive,
            })}
            onClick={onClick}
        >
            <p className="text-[#b3b9c6] text-left text-[16px]">
                <FontAwesomeIcon className="mr-4" icon={icon} />
                {title}
            </p>
        </button>
    );
}

BtnItem.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default BtnItem;
