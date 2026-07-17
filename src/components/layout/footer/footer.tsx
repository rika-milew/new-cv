import classNames from 'classnames/bind';
import { footerConfig } from './footer.config';
import styles from './footer.module.css';

const cx = classNames.bind(styles);

export type FooterIcon = 'github' | 'linkedin' | 'telegram';

export default function Footer() {
  const getIconStyle = (icon: FooterIcon) => {
    const iconConfig = footerConfig.icons[icon];
    return {
      WebkitMaskImage: iconConfig.webkitMaskImage,
      maskImage: iconConfig.maskImage,
    };
  };

  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <p>{footerConfig.copyright}</p>
        <div className={cx('icons')}>
          {footerConfig.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <div
                className={cx('footer-icon', styles.icon)}
                style={getIconStyle(link.icon)}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
