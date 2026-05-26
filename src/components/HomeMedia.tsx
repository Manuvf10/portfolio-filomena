'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function HomeMedia({
  primaryAlt,
  secondaryAlt,
  mobileVideoLabel
}: {
  primaryAlt: string;
  secondaryAlt: string;
  mobileVideoLabel: string;
}) {
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = mobileVideoRef.current;
    if (!video) return;

    video.muted = true;
    const startPlayback = async () => {
      try {
        await video.play();
      } catch {
        // Si el navegador bloquea autoplay, el vídeo sigue visible en primer frame sin romper layout.
      }
    };

    void startPlayback();
  }, []);

  return (
    <>
      <div className="hidden h-[280px] w-full bg-[#E1E1E1] md:grid md:grid-cols-[1fr_220px_220px]">
        <div />
        <div className="relative h-full w-full">
          <Image src="/images/home/desktop-left.jpg" alt={primaryAlt} fill className="h-full w-full object-cover" priority />
        </div>
        <div className="relative h-full w-full">
          <Image src="/images/home/desktop-right.jpg" alt={secondaryAlt} fill className="h-full w-full object-cover" priority />
        </div>
      </div>

      <div className="md:hidden">
        <video
          ref={mobileVideoRef}
          className="w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={mobileVideoLabel}
        >
          <source src="/videos/home-mobile.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
