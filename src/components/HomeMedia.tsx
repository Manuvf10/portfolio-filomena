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
      {/* LAYOUT DESKTOP: composición fija con dos imágenes estáticas, alineadas y con mucho aire. */}
      <div className="hidden gap-6 md:grid md:grid-cols-12">
        <div className="md:col-span-7">
          <Image
            src="/images/placeholders/hero-editorial.svg"
            alt={primaryAlt}
            width={1200}
            height={1400}
            className="h-[72vh] min-h-[560px] w-full object-cover"
            priority
          />
        </div>
        <div className="md:col-span-5">
          <Image
            src="/images/projects/project-06.svg"
            alt={secondaryAlt}
            width={900}
            height={1200}
            className="h-[72vh] min-h-[560px] w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* MEDIA MOBILE: vídeo real de cliente. Sin poster para priorizar percepción de movimiento. */}
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
