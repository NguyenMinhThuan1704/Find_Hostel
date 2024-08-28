import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SearchProductItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from 'components/Image/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchProductItem({ data }) {
    console.log(data);
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
            </div>
        </Link>
    );
}

SearchProductItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SearchProductItem;
