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
      tl.set(manulInnerRef.current, { yPercent: 35, scale: 0.96, opacity: 0 });
      tl.set(cloudImageRef.current, { autoAlpha: 0, scale: 0.8 });
      tl.to(manulInnerRef.current, {
        yPercent: 15,
        scale: 0.985,
        opacity: 1,
        duration: 1.8,
        ease: 'power3.out',
      });
      tl.to(manulInnerRef.current, { yPercent: -37, scale: 1, duration: 0.2, ease: 'power2.out' });
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
    <section className="relative w-full pt-48 sm:pt-56 bg-[#F5F3FF] overflow-x-hidden overflow-y-visible">
      <div className="mx-auto max-w-7xl relative overflow-visible px-4 sm:px-6">
        <div ref={manulOuterRef} className="absolute left-1/2 top-0 z-0 -translate-x-1/2 -translate-y-[71%] pointer-events-none">
          <div className="relative">
            <div className="absolute -right-2 -top-14 z-0 pointer-events-none sm:-right-10 sm:-top-10">
              <img
                ref={cloudImageRef}
                src="/Облачко новое.webp"
                alt=""
                className="h-[220px] w-auto opacity-0 sm:h-[280px]"
                style={{ transform: 'rotate(25deg) scale(0.8)' }}
                aria-hidden="true"
              />
            </div>
            <div className="absolute -left-8 top-[-40%] z-0 pointer-events-none sm:-left-14 sm:top-[-36%]">
              <img
                src="/hero-sticker.webp"
                alt=""
                className="h-[180px] w-auto rotate-0 object-contain opacity-95 sm:h-[260px]"
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

        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 z-10 p-6 sm:p-10 text-center overflow-hidden shadow-[0_-18px_24px_-18px_rgba(15,23,42,0.16)] bg-white">
          <div className="relative mx-auto max-w-5xl">
            <h1 className="mb-3 text-[48px] sm:text-[64px] font-black leading-[1.05] font-nunito">
              Канцтовары,
              <br />
              в которые ты{' '}
              <span className="relative inline-block text-purple-600 text-[56px] sm:text-[72px]">
                влюбишься
                <img
                  src="/Сердце лайм.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute left-[95%] top-[0%] mt-2 -translate-x-0 h-16 w-auto sm:h-20"
                  style={{ transform: 'rotate(45deg)' }}
                />
              </span>
            </h1>

            <p className="mb-5 text-base text-secondary leading-relaxed">
              Трендовая канцелярия, мерч блогеров и игрушки, которые хочется взять прямо сейчас!
            </p>

            <div className="relative mb-5 w-full">
              <div className="absolute -left-6 top-[-12%] z-0 -translate-y-1/2 sm:-left-12 sm:top-[-8%] block">
                <img
                  src="/клякса фиол.webp"
                  alt=""
                  className="w-[135px] h-auto opacity-100 sm:w-[248px]"
                  aria-hidden="true"
                />
              </div>
              <div className="relative flex flex-col gap-3 z-10">
                <button className="hero-button-primary w-full rounded-xl bg-[#A78BFA] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[#9774f0]">
                  Смотреть хиты
                </button>
                <button className="catalog-button w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base font-semibold text-primary">
                  <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-base">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8Z" />
                    </svg>
                  </span>
                  Каталог
                </button>
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
