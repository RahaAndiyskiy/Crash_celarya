'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ManulBlock from './ManulBlock';

export default function Hero({ data }) {
  const manulOuterRef = useRef(null);
  const manulInnerRef = useRef(null);
  const cloudImageRef = useRef(null);

  useEffect(() => {
    if (!manulOuterRef.current || !manulInnerRef.current || !cloudImageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.9 });
      tl.set(manulOuterRef.current, { zIndex: 0 });
      tl.set(manulInnerRef.current, { yPercent: 0, scale: 0.96, opacity: 0 });
      tl.set(cloudImageRef.current, { autoAlpha: 0, scale: 0.8 });
      tl.to(manulInnerRef.current, {
        yPercent: 5,
        scale: 0.985,
        opacity: 1,
        duration: 1.8,
        ease: 'power3.out',
      });
      tl.to(manulInnerRef.current, { yPercent: -37, scale: 1, duration: 0.2, ease: 'power3.out' });
      tl.to(manulOuterRef.current, { zIndex: 20, duration: 0 }, '-=0.012');
      tl.to(cloudImageRef.current, {
        autoAlpha: 1,
        scale: 1.2,
        duration: 0.35,
        ease: 'power3.out',
      }, '+=0.12');
      tl.to(cloudImageRef.current, {
        scale: 1,
        duration: 0.18,
        ease: 'power2.out',
      });
    }, manulOuterRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[600px] lg:min-h-[720px] w-full pt-40 sm:pt-64 bg-[#F5F3FF] overflow-x-hidden overflow-y-visible">
      <div className="mx-auto max-w-7xl relative overflow-visible">
        <div ref={manulOuterRef} className="absolute left-1/2 top-0 z-0 -translate-x-1/2 -translate-y-[71%] pointer-events-none">
          <div className="relative">
            <div className="absolute right-0 top-0 z-0 pointer-events-none opacity-90">
              <img
                ref={cloudImageRef}
                src="/optimized/Облачко новое.webp"
                alt=""
                loading="eager"
                className="h-[220px] w-auto opacity-0 sm:h-[280px] lg:h-[340px]"
                style={{ transform: 'translate(2rem, -5rem) rotate(25deg) scale(0.8)' }}
                aria-hidden="true"
              />
            </div>

            <div className="absolute left-0 top-0 z-0 pointer-events-none opacity-90">
              <img
                src="/optimized/hero-sticker.webp"
                alt=""
                loading="eager"
                className="h-[162px] w-auto object-contain opacity-95 sm:h-[234px] -translate-x-20 translate-y-[-40%] sm:-translate-x-14 sm:translate-y-[-35%] lg:-translate-x-28 lg:translate-y-[-25%]"
                aria-hidden="true"
              />
            </div>
            <div
              ref={manulInnerRef}
              className="will-change-transform"
              style={{ transform: 'translateY(35%) scale(0.96)', opacity: 0 }}
            >
              <ManulBlock />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full px-4 py-8 sm:px-6 sm:py-10 text-center overflow-hidden rounded-t-[32px] shadow-[0_-18px_24px_-18px_rgba(15,23,42,0.16)] lg:shadow-[0_-18px_24px_-18px_rgba(168,85,247,0.38),20px_0_45px_-20px_rgba(56,189,248,0.28),-20px_0_45px_-20px_rgba(236,72,153,0.28),0_0_180px_0_rgba(168,85,247,0.18)] bg-white">
          <div className="relative mx-auto w-full max-w-3xl">
            <h1 className="mb-2 text-4xl lg:text-[2.5rem] sm:text-2xl md:text-3xl font-black sm:leading-[1.04] font-nunito">
              <span className="block">Канцтовары,</span>
              <span className="block lg:text-[3.8rem] xl:text-[4.25rem]">в которые ты</span>
              <span className="relative block whitespace-normal text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-none bg-gradient-to-r from-violet-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent">
                влюбишься
                <img
                  src="/optimized/Сердце лайм.webp"
                  alt=""
                  loading="eager"
                  aria-hidden="true"
                  className="absolute left-3/4 top-1/2 z-0 h-[3.75rem] w-auto -translate-x-1/2 -translate-y-1/2 sm:h-[6rem]"
                  style={{ transform: 'rotate(45deg)' }}
                />
              </span>
            </h1>

            <p className="mb-5 text-sm sm:text-base lg:text-lg text-secondary leading-relaxed max-w-[520px] mx-auto text-center">
  Трендовая канцелярия, мерч блогеров и игрушки, которые хочется взять прямо сейчас!
</p>

<div className="relative mb-5 w-full flex flex-col items-center">
  
  {/* КЛЯКСА */}
  <div
    className="
      absolute z-0 pointer-events-none
      left-1/2 -translate-x-1/2 bottom-12
      sm:bottom-16
      lg:left-[-60px] lg:translate-x-0 lg:bottom-10
    "
    style={{ opacity: 0.4 }}
  >
    <img
      src="/optimized/клякса фиол.webp"
      alt=""
      loading="eager"
      className="w-[135px] sm:w-[200px] lg:w-[260px] h-auto"
      aria-hidden="true"
    />
  </div>

  {/* КНОПКИ */}
  <div className="relative z-10 flex flex-col gap-3 w-full max-w-[420px]">
    
    <a
      href="#contacts"
      className="
        hero-button-primary
        w-full rounded-xl
        bg-[#A78BFA]
        px-4 py-2.5
        text-base lg:text-lg
        font-semibold text-white
        transition-colors hover:bg-[#9774f0]
      "
    >
      Контакты
    </a>

    <a
      href="#products"
      className="
        catalog-button
        w-full rounded-xl
        border border-gray-300 bg-white
        px-4 py-2.5
        text-base lg:text-lg
        font-semibold text-primary
        flex items-center justify-center
      "
    >
      <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      </span>
      Каталог
    </a>
  </div>
</div>

<div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700">
  <span className="text-lg">🐾</span>
  <span className="border-b border-purple-400">Одобрено Манулом</span>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
