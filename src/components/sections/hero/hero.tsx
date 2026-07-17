import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Button from '../../button/button';
import Heading from '../../heading/heading';
import styles from './hero.module.css';

const cx = classNames.bind(styles);

export default function Hero() {
  return (
    <section id="hero" className={`section} ${cx('section', 'hero')}`}>
      <div className={cx('container')}>
        <p className={cx('hero-text')}>Hello, I&apos;m</p>
        <Heading as="h1" gradient>
          Erika Milevskaya
        </Heading>
        <p className={cx('hero-heading')}>Frontend Developer</p>
        <p className={cx('hero-description')}>
          Building interfaces that inspire. React, TypeScript, and a touch of
          cosmic magic ✨
        </p>
        <div className={cx('buttons-container')}>
          <Button href="/#about" variant="primary">
            About Me
          </Button>
          <Button href="/#contacts" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
      <Link
        href="/#about"
        className={cx('arrow-icon')}
        aria-label="Scroll to about"
      >
        <Image src="/icons/arrow.svg" alt="" width={28} height={28} />
      </Link>
    </section>
  );
}
