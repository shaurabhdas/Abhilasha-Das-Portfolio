import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const countRef = useRef(null);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * numericValue);

      setDisplayValue(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(numericValue);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={countRef} className="inline-block">
      {prefix}
      {value.includes('+') && !prefix ? '+' : ''}
      {displayValue}
      {value.includes('%') ? '%' : ''}
      {value.includes('+') && suffix ? '+' : ''}
      {suffix}
    </span>
  );
}
