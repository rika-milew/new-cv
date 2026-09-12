'use client';

import classNames from 'classnames/bind';
import { useSectionReveal } from '@/hooks/use-section-reveal';
import { portfolioConfig } from './portfolio.config';
import { Heading } from '@/components/heading/heading';
import { Carousel } from '@/components/carousel/carousel';
import { ProjectCard } from '@/components/project-card/project-card';
import { FEATURED_PROJECTS_COUNT } from '@/constants';
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
            {portfolioConfig
              .slice(0, FEATURED_PROJECTS_COUNT)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
