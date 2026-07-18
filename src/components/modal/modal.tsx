'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from '../button/button';

import styles from './modal.module.css';

const cx = classNames.bind(styles);

const ICONS = {
  success: '/icons/check-icon.svg',
  error: '/icons/cross-icon.svg',
};

type ModalType = 'success' | 'error';

type ModalData = {
  type: ModalType;
  title: string;
  message: string;
};

type ModalProps = {
  isOpen: boolean;
  data: ModalData | null;
  onClose: () => void;
};

export function Modal({ isOpen, data, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) {
    return null;
  }

  return createPortal(
    <div
      className={cx('modal', 'show')}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={cx('content')} onClick={(e) => e.stopPropagation()}>
        <button
          className={cx('close-icon')}
          onClick={onClose}
          aria-label="Close modal"
        />
        <Image
          src={ICONS[data.type]}
          alt={data.type}
          className={cx('modal-icon')}
          width={48}
          height={48}
          priority
        />
        <p className={cx('heading')}>{data.title}</p>
        <p className={cx('text')}>{data.message}</p>
        <Button variant="primary" onClick={onClose}>
          {' '}
          Close
        </Button>
      </div>
    </div>,
    document.body,
  );
}
