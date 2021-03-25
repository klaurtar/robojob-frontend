import React, { useState, useLayoutEffect } from 'react';
import './FadeInSection.css';

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = React.useRef();

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  const { direction } = props;

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${direction} ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {props.children}
    </div>
  );
}
