import React from 'react';
import Image from 'components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';
import styles from './Swiper.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SlideSwiper({ img }) {
    return (
        <>
            <div className={cx('swiper-button-prev')}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                navigation={{
                    nextEl: `.${cx('swiper-button-next')}`,
                    prevEl: `.${cx('swiper-button-prev')}`,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className={cx('slide')}
                loop={true}
            >
                {img.map((slideSrc, index) => (
                    <SwiperSlide key={index}>
                        <Link>
                            <div className={cx('prominent__item')}>
                                <Image className={cx('prominent__item--img')} src={slideSrc} />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={cx('swiper-button-next')}>
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </>
    );
}

export default SlideSwiper;
