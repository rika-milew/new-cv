'use client';

import classNames from 'classnames/bind';
import { Heading } from '@/components/heading/heading';
import type { PortfolioItem } from '@/components/sections/portfolio/portfolio.config';
import styles from './project-card.module.css';

const cx = classNames.bind(styles);

type ProjectCardProps = {
  project: PortfolioItem;
  activeBadge?: string;
  onBadgeClick?: (badge: string) => void;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={cx('card')}>
      <Heading as="h3" className={cx('portfolio-heading')}>
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
    </article>
  );
}
