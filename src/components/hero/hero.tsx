import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from './hero.module.css';

const cx = classNames.bind(styles);

export default function Hero() {
  return (
    <section id="hero" className={cx('section')}>
      <div className={cx('container')}>
        <p className={cx('hero-text')}>Hello, I&apos;m</p>
        <h1 className={cx('gradient-title')}>Erika Milevskaya</h1>
        <p className={cx('hero-heading')}>Frontend Developer</p>
        <p className={cx('hero-description')}>
          Building interfaces that inspire. React, TypeScript, and a touch of
          cosmic magic ✨
        </p>
        <div className={cx('buttons-container')}>
          <Link href="/#about" className={cx('button', 'color-button')}>
            About Me
          </Link>
          <Link
            href="/#contacts"
            className={cx('button', 'transparent-button')}
          >
            Contact Me
          </Link>
        </div>
      </div>
      <Link
        href="/#about"
        className={cx('arrow-icon')}
        aria-label="Scroll to about"
      >
        <Image src="/icons/arrow.svg" alt="" width={24} height={24} />
      </Link>
    </section>
  );
}
