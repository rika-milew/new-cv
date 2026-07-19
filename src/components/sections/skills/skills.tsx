'use client';

import classNames from 'classnames/bind';
import { useSectionReveal } from '@/hooks/use-section-reveal';
import { Heading } from '@/components/heading/heading';
import { skillsConfig } from './skills.config';
import styles from './skills.module.css';

const cx = classNames.bind(styles);

export function Skills() {
  const [ref, isRevealed] = useSectionReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={cx('section', styles.section, isRevealed && 'show')}
    >
      <div className={cx('global-container', styles.container)}>
        <Heading as="h2">Skills & Technologies</Heading>
        <div className={cx('cards-container')}>
          {skillsConfig.map((group) => (
            <div key={group.title} className={cx('card')}>
              <Heading as="h3">{group.title}</Heading>
              <div className={cx('badges-container')}>
                {group.items.map((skill) => (
                  <div key={skill} className={cx('badge', 'skill-badge')}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
