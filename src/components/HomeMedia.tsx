'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function HomeMedia({
  primaryAlt,
  mobileVideoLabel
}: {
  primaryAlt: string;
  mobileVideoLabel: string;
}) {
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = mobileVideoRef.current;
    if (!video) return;

    video.muted = true;
    void video.play().catch(() => {});
  }, []);

  return (
    <>
      <div className="hidden bg-[#E1E1E1] md:block">
        <div className="container-shell grid h-[280px] grid-cols-[1fr_minmax(430px,460px)]">
          <div />

          <Image
            src="/images/home/desktop-left.jpg"
            alt={primaryAlt}
            width={920}
            height={560}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="md:hidden">
        <video
          ref={mobileVideoRef}
          className="aspect-[4/5] w-full object-cover"
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
