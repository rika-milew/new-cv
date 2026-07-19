'use client';

import Image from 'next/image';
import classNames from 'classnames/bind';
import { Heading } from '@/components/heading/heading';
import { useSectionReveal } from '@/hooks/use-section-reveal';
import { educationConfig } from './education.config';
import styles from './education.module.css';

const cx = classNames.bind(styles);

export function Education() {
  const [ref, isRevealed] = useSectionReveal();

  return (
    <section
      id="education"
      ref={ref}
      className={cx('section', styles.section, { show: isRevealed })}
    >
      <div className={cx('global-container', styles.container)}>
        <Heading as="h2" gradient>
          Education
        </Heading>
        <div className={cx('timeline')}>
          <div className={cx('decoration')} />
          <div className={cx('items')}>
            {educationConfig.map((item, index) => (
              <div key={index} className={cx('item')}>
                <div className={cx('icon')}>
                  <Image
                    src={`/icons/${item.icon}.svg`}
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
                <div className={cx('card')}>
                  <div className={cx('year')}>{item.year}</div>
                  <div className={cx('establishment')}>
                    {item.establishment}
                  </div>
                  <div className={cx('description')}>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
