'use client';

import classNames from 'classnames/bind';
import { useSectionReveal } from '@/hooks/use-section-reveal';
import { portfolioConfig } from './portfolio.config';
import { Heading } from '@/components/heading/heading';
import { Carousel } from '@/components/carousel/carousel';
import styles from './portfolio.module.css';

const cx = classNames.bind(styles);

export function Portfolio() {
  const [ref, isRevealed] = useSectionReveal();

  return (
    <section
      id="portfolio"
      ref={ref}
      className={cx('section', styles.section, { show: isRevealed })}
      aria-labelledby="portfolio-title"
    >
      <div className={cx('global-container', 'container')}>
        <Heading as="h2" id="portfolio-title" gradient>
          Portfolio
        </Heading>
        <div className={cx('carousel-wrapper')}>
          <Carousel
            options={{
              align: 'center',
              slidesToScroll: 1,
              containScroll: 'trimSnaps',
              breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 2 },
                '(min-width: 1024px)': { slidesToScroll: 3 },
              },
            }}
          >
            {portfolioConfig.map((project) => (
              <div className={cx('card')} key={project.title}>
                <Heading as="h3" className="portfolio-heading">
                  {project.title}
                </Heading>
                <p className={cx('description')}>{project.description}</p>
                <div className={cx('badges-container')}>
                  {project.badges.map((badge) => (
                    <div key={badge} className={cx('badge')}>
                      {badge}
                    </div>
                  ))}
                </div>
                <div className={cx('links')}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('link')}
                  >
                    <div className={cx('icon', 'github')} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('link')}
                  >
                    <div className={cx('icon', 'demo')} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
