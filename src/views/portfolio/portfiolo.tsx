'use client';

import { useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import { Heading } from '@/components/heading/heading';
import {
  portfolioConfig,
  allTechnologies,
} from '@/components/sections/portfolio/portfolio.config';
import { ProjectCard } from '@/components//project-card/project-card';
import styles from './portfolio-page.module.css';
import { useSectionReveal } from '@/hooks/use-section-reveal';

const cx = classNames.bind(styles);

export function PortfolioView() {
  const [ref, isRevealed] = useSectionReveal();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return portfolioConfig;
    }
    return portfolioConfig.filter((project) =>
      project.badges.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <>
      <section
        ref={ref}
        className={cx('section', styles.section, { show: isRevealed })}
        aria-labelledby="portfolio-page-title"
      >
        <div className={cx('global-container', 'container')}>
          <Heading
            as="h1"
            id="portfolio-page-title"
            gradient
            className={cx('title')}
          >
            Portfolio
          </Heading>

          <p className={cx('subtitle')}>
            A collection of projects I&apos;ve built — from small experiments to
            production apps. Filter by stack to see what I use in practice.
          </p>

          <div
            className={cx('filters')}
            role="tablist"
            aria-label="Filter projects by technology"
          >
            <button
              role="tab"
              aria-selected={activeFilter === 'All'}
              className={cx('filter-button', {
                active: activeFilter === 'All',
              })}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            {allTechnologies.map((technology) => (
              <button
                key={technology}
                role="tab"
                aria-selected={activeFilter === technology}
                className={cx('filter-button', {
                  active: activeFilter === technology,
                })}
                onClick={() => setActiveFilter(technology)}
              >
                {technology}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className={cx('projects')}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className={cx('empty-state')}>
              <p>No projects found with this technology.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
