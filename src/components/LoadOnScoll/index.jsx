import React, { useCallback, useRef } from 'react';

const LoadOnScroll = ({ onLoad, loading, hashMore }) => {
  const observer = useRef(null);

  const componentRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer && observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            onLoad && onLoad();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        }
      );

      if (node) {
        observer.current.observe(node);
        if (!hashMore) observer?.current?.unobserve(node);
      }
    },
    [hashMore, loading, onLoad]
  );

  return <div ref={componentRef} style={{ height: '1rem' }}></div>;
};

export default LoadOnScroll;
