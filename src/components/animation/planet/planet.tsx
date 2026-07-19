import classNames from 'classnames/bind';
import styles from './planet.module.css';

const cx = classNames.bind(styles);

export function Planet() {
  return (
    <div className={cx('container')}>
      <div className={cx('planet')} />
    </div>
  );
}
