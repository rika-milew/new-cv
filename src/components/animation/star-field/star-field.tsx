'use client';

import { useState } from 'react';
import { STARS } from '@/constants';
import classNames from 'classnames/bind';
import styles from './star-field.module.css';

const cx = classNames.bind(styles);

type StarData = {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: string;
  delay: string;
};

function generateStars(): StarData[] {
  return Array.from({ length: STARS.COUNT }, (_, index) => {
    const size = Math.random() * STARS.SIZE_VARIATION + STARS.SIZE;
    const left = Math.random() * (100 - size);
    const top = Math.random() * (100 - size);
    const duration = (
      Math.random() * STARS.MAX_DURATION +
      STARS.MIN_DURATION
    ).toFixed(1);
    const delay = (Math.random() * STARS.MAX_DELAY).toFixed(1);

    return {
      id: index,
      size,
      left,
      top,
      duration: `${duration}s`,
      delay: `${delay}s`,
    };
  });
}

export default function Starfield() {
  const [stars] = useState<StarData[]>(generateStars);

  return (
    <div className={cx('starfiled')}>
      {stars.map((star) => {
        const starStyle: React.CSSProperties = {
          left: `${String(star.left)}%`,
          top: `${String(star.top)}%`,
          width: `${String(star.size)}px`,
          height: `${String(star.size)}px`,
          '--duration': star.duration,
          '--delay': star.delay,
        };

        return <div key={star.id} className={cx('star')} style={starStyle} />;
      })}
    </div>
  );
}
