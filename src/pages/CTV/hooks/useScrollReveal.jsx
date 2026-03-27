import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    revealEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
