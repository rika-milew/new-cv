import Link from 'next/link';
import type { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.css';

const cx = classNames.bind(styles);

type ButtonProps = {
  href?: string;
  variant: 'primary' | 'secondary';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
};

export default function Button({
  href,
  variant,
  onClick,
  type = 'button',
  children,
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cx('button', variant)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cx('button', variant)}>
      {children}
    </button>
  );
}
