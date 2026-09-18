import type { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './heading.module.css';

const cx = classNames.bind(styles);

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3';
  gradient?: boolean;
  animated?: boolean;
  className?: string;
  id?: string;
  children: ReactNode;
};

export function Heading({
  as: Tag = 'h2',
  gradient = false,
  animated = false,
  className,
  id,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={cx('heading', Tag, { gradient, animated }, className)}
      id={id}
    >
      {children}
    </Tag>
  );
}
