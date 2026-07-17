import classNames from 'classnames/bind';
import styles from './moon.module.css';

const cx = classNames.bind(styles);

export default function Moon() {
  return <div className={cx('moon')} />;
}
