import Link from 'next/link';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { ANCHORS } from '@/constants';
import { Button } from '@/components/button/button';
import { Heading } from '@/components/heading/heading';
import { Planet } from '@/components/animation/planet/planet';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import styles from './hero.module.css';

const cx = classNames.bind(styles);

export function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="hero" className={cx('section', 'hero')}>
      <Planet />
      <div className={cx('global-container', styles.container)}>
        <p className={cx('hero-text')}>Hello, I&apos;m</p>
        <Heading as="h1" gradient>
          Erika Milevskaya
        </Heading>
        <p className={cx('hero-heading')}>Web Developer</p>
        <p className={cx('hero-description')}>
          Building interfaces that inspire. React, TypeScript, and a touch of
          cosmic magic ✨
        </p>
        <div className={cx('buttons-container')}>
          <Button
            href={ANCHORS.ABOUT}
            variant="primary"
            onClick={(e) => scrollTo(e, ANCHORS.ABOUT)}
          >
            About Me
          </Button>
          <Button
            href={ANCHORS.CONTACTS}
            variant="secondary"
            onClick={(e) => scrollTo(e, ANCHORS.CONTACTS)}
          >
            Contact Me
          </Button>
        </div>
      </div>
      <Link
        href={ANCHORS.ABOUT}
        className={cx('arrow-icon')}
        aria-label="Scroll to about"
        onClick={(e) => scrollTo(e, ANCHORS.ABOUT)}
      >
        <Image src="/icons/arrow.svg" alt="" width={28} height={28} />
      </Link>
    </section>
  );
}
