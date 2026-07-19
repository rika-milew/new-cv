'use client';

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import { Moon } from '@/components/animation/moon/moon';
import styles from './client-layout.module.css';

const cx = classNames.bind(styles);

const Starfield = dynamic(
  () => import('@/components/animation/star-field/star-field'),
  {
    ssr: false,
  },
);

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className={cx('decorations')}>
        <Starfield />
        <Moon />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
