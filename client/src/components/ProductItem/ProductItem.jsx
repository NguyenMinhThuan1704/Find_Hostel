import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'components/Image';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data, width = 'w-full' }) {
    const images = Array.isArray(data.images) ? data.images : [];

    const defaultImage = images.find((img) => img.isDefault) || images[0];
    const imageUrl = defaultImage?.url || '';

    return (
        <div className={cx('prominent__item--container', width, 'md:w-1/4')}>
            <Link to={data.to}>
                <div className={cx('prominent__item')}>
                    <div className={cx('overflow-hidden')}>
                        <Image className={cx('prominent__item--img')} src={imageUrl} />
                    </div>
                    <div className={cx('prominent__item--title')}>
                        <span title={data.title} className="line-clamp-2">
                            {data.title}
                        </span>
                        <strong>{data.price}</strong>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductItem;
