import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Remet la page en haut à chaque navigation (sinon la nouvelle page s'ouvre au milieu).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
