'use client';

import classNames from 'classnames/bind';
import { useSectionReveal } from '@/hooks/use-section-reveal';
import { portfolioConfig } from './portfolio.config';
import Heading from '@/components/heading/heading';
import styles from './portfolio.module.css';

const cx = classNames.bind(styles);

export default function Portfolio() {
  const [ref, isRevealed] = useSectionReveal();

  return (
    <section
      id="portfolio"
      ref={ref}
      className={cx('section', styles.section, isRevealed && 'show')}
    >
      <div className={cx('container')}>
        <Heading as="h2" gradient>
          Portfolio
        </Heading>
        <div className={cx('cards-container')}>
          {portfolioConfig.map((project) => (
            <div key={project.title} className={cx('card')}>
              <Heading as="h3" className="portfilio-heading">
                {project.title}
              </Heading>
              <p className={styles.description}>{project.description}</p>
              <div className={cx('badges-container')}>
                {project.badges.map((badge) => (
                  <div key={badge} className={cx('badge')}>
                    {badge}
                  </div>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx('portfolio-link')}
                >
                  <div className={cx('portfolio-icon', 'github')} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx('portfolio-link')}
                >
                  <div className={cx('portfolio-icon', 'link')} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
