/* eslint-disable jsx-a11y/anchor-has-content */
import classNames from 'classnames/bind';
import styles from './Support.module.scss';
import img from 'assets/img/Sp';

const cx = classNames.bind(styles);

function Support() {
    return (
        <div className={cx('support__fix')}>
            <div>
                <a href="/" className={cx('support__fix-link')} style={{ backgroundImage: `url(${img.phone})` }}></a>
            </div>
            <div>
                <a href="/" className={cx('support__fix-link')} style={{ backgroundImage: `url(${img.zl})` }}></a>
            </div>
            <div>
                <a href="/" className={cx('support__fix-link')} style={{ backgroundImage: `url(${img.fb})` }}></a>
            </div>
        </div>
    );
}

export default Support;
