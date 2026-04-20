export function initObserver() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1 },
  );

  sections.forEach((section) => observer.observe(section));
}
