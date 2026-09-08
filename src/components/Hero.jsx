import React, { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrc = isMobile ? '/mobile_bg.mp4' : '/pc_bg.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [videoSrc]);

  return (
    <section className="hero-section" id="hero-section">
      <video
        ref={videoRef}
        key={videoSrc}
        className="hero-video-bg"
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
