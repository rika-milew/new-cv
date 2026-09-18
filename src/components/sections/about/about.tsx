'use client';

import Image from 'next/image';
import classNames from 'classnames/bind';
import { useSectionReveal } from '@/hooks/use-section-reveal';
import { Heading } from '@/components/heading/heading';
import styles from './about.module.css';
import photo from '@/../public/images/photo1.jpg';

const cx = classNames.bind(styles);

export function About() {
  const [ref, isRevealed] = useSectionReveal();
  return (
    <section
      id="about"
      ref={ref}
      className={cx('section', styles.section, isRevealed && 'show')}
      aria-labelledby="about-title"
    >
      <div className={cx('global-container', styles.container)}>
        <Heading as="h2" id="about-title" gradient>
          About Me
        </Heading>
        <div className={cx('about-content')}>
          <div className={cx('about-photo')}>
            <Image
              src={photo}
              alt="Erika Milevskaya"
              fill
              sizes="(max-width: 768px) 10rem, 12rem"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={cx('about-text')}>
            <p>
              Web developer with a background in content management. I&apos;m
              interested in how systems, data, and interfaces work together. I
              build modern web applications with React and TypeScript, and
              I&apos;m growing my backend skills with Node.js and databases. I
              like turning messy ideas into structured, working systems &mdash;
              whether it&apos;s an interface, an API, or a database.
            </p>
            <p>
              My previous experience in content management gave me an
              understanding of structure, UX flow, and information organization
              &mdash; which I now apply to development. I care about clean code,
              maintainable architecture, and building things that work reliably.
              Currently looking for opportunities to contribute to real products
              and grow as an engineer.
            </p>
            <div className={cx('about-info')}>
              <span>📍 Minsk, Belarus</span>
              <span>💼 1+ year of experience</span>
              <span>🏆 10+ projects shipped</span>
              <span>🌍 English &mdash; B2</span>
              <span>⚡ React · TypeScript</span>
              <span>🚀 Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
