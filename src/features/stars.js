const STAR_COUNT = 80;
const STAR_SIZE = 1;
const STAR_SIZE_VARIATION = 3;

const MAX_DURATION = 4;
const MIN_DURATION = 2;
const MAX_DELAY = 5;

export function initStars() {
  const starfield = document.getElementById('starfield');

  if (!starfield) {
    return;
  }

  for (let index = 0; index < STAR_COUNT; index++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * STAR_SIZE_VARIATION + STAR_SIZE;

    const left = Math.random() * (100 - size);
    const top = Math.random() * (100 - size);

    const duration = (Math.random() * MAX_DURATION + MIN_DURATION).toFixed(1);

    const delay = (Math.random() * MAX_DELAY).toFixed(1);

    Object.assign(star.style, {
      left: `${left}%`,
      top: `${top}%`,
      width: `${size}px`,
      height: `${size}px`,
    });

    star.style.setProperty('--duration', duration + 's');
    star.style.setProperty('--delay', delay + 's');

    starfield.append(star);
  }
}
