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
    >
      <div className={cx('global-container', styles.container)}>
        <Heading as="h2">About Me</Heading>
        <div className={cx('about-content', styles.content)}>
          <div className={cx('about-photo', styles.photo)}>
            <Image
              src={photo}
              alt="Erika Milevskaya"
              fill
              sizes="(max-width: 768px) 10rem, 12rem"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={cx('about-text', styles.text)}>
            <p>
              Frontend developer focused on building modern web applications
              with React and TypeScript. Currently developing personal projects
              and improving frontend skills through hands-on practice. I care
              about clean, maintainable code, component-driven architecture, and
              creating smooth user experiences.
            </p>
            <p>
              Previous experience as a content manager helped me understand
              website structure, UX flow, and content organization, which I now
              apply in frontend development. I enjoy turning ideas into
              functional interfaces and continuously improving performance and
              structure.
            </p>
            <div className={cx('about-info', styles.info)}>
              <span>📍 Minsk, Belarus</span>
              <span>💼 1+ year of experience</span>
              <span>🚀 Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
