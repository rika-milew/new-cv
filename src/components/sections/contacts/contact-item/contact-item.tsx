'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames/bind';
import type { ContactItem } from '../contacts.config';
import styles from '../contacts.module.css';

const cx = classNames.bind(styles);

const COPIED_TIMEOUT = 2000;

type ContactItemProps = {
  contact: ContactItem;
};

export function ContactItem({ contact }: ContactItemProps) {
  const [copied, setCopied] = useState(false);
  const isExternalLink = contact.href.startsWith('http');
  const isMailto = contact.href.startsWith('mailto:');

  const handleClick = (e: MouseEvent) => {
    if (isMailto) {
      e.preventDefault();
      const email = contact.href.replace('mailto:', '');
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), COPIED_TIMEOUT);
        })
        .catch(() => {
          void 0;
        });
    }
  };

  return (
    <a
      href={contact.href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      onClick={isMailto ? handleClick : undefined}
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
          <div className={cx('link')}>
            {copied ? 'Email copied!' : contact.linkText}
          </div>
        </div>
      </div>
    </a>
  );
}
