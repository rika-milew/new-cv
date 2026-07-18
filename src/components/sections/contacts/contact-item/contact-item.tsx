'use client';

import classNames from 'classnames/bind';
import type { ContactItem } from '../contacts.config';
import styles from '../contacts.module.css';

const cx = classNames.bind(styles);

type ContactItemProps = {
  contact: ContactItem;
};

export function ContactItem({ contact }: ContactItemProps) {
  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cx('link')}
    >
      <div className={cx('item')}>
        <div
          className={cx('icon', contact.icon.class)}
          style={{
            maskImage: contact.icon.maskImage,
            WebkitMaskImage: contact.icon.webkitMaskImage,
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            WebkitMaskSize: 'contain',
          }}
        />
        <div className={cx('info')}>
          <div className={cx('heading')}>{contact.heading}</div>
          <div className={cx('link')}>{contact.linkText}</div>
        </div>
      </div>
    </a>
  );
}
